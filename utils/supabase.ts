import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eledpgyadtqqiwwevuff.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsZWRwZ3lhZHRxcWl3d2V2dWZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA4MDA3MDgsImV4cCI6MjAzNjM3NjcwOH0.KdLoaz3TAosuq4sHKWnsLaf77YPXNGCIP_hDqgGqc30";

export const supabase = createClient(supabaseUrl, supabaseKey);
