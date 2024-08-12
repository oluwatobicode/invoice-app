import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabaseUrl = "https://ffyzayldaouiwfevlush.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmeXpheWxkYW91aXdmZXZsdXNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzNjI2ODUsImV4cCI6MjAxNjkzODY4NX0.RBuMYA4aylEHVYwkWT4pRLvR5HSNVxRw-owRJ701SSI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
