require("dotenv").config();

const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const stripe = require("stripe")(process.env.SECRET_KEY);
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_KEY
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  const orderId = crypto.randomUUID().slice(0, 5).toUpperCase();

  try {
    const { items, name, email } = req.body;

    // Calculate total and total quantity
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const quantity = items.reduce((sum, item) => sum + item.quantity, 0);

    // Calculate estimated delivery (order date + 7 days)
    const createdAt = new Date();
    const estimatedDelivery = new Date(createdAt);
    estimatedDelivery.setDate(estimatedDelivery.getDate() + 7);

    const lineItems = items.map((item) => ({
      price: item.id,
      quantity: item.quantity,
    }));

    const { error } = await supabase.from("orders").insert([
      {
        orderId,
        name,
        email,
        items,
        total,
        quantity,
        status: "pending",
        orderDate: createdAt.toISOString(),
        estimatedDelivery: estimatedDelivery.toISOString(),
      },
    ]);
    if (error) throw error;

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `http://localhost:5173/order/${orderId}`,
      cancel_url: "http://localhost:5173/home",
    });
    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("💥 Stripe error:", err.message);
    res.status(400).json({ error: err.message });
  }
});

app.listen(4000, () => console.log("Listening on port 4000"));
