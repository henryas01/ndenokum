"use client";

import { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Paper,
} from "@mui/material";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center">
      <Paper elevation={6} className="p-8 w-full max-w-md rounded-xl shadow-xl">
        <Typography
          variant="h5"
          className="text-center mb-4 font-bold text-orange-600"
        >
          Login to Your Account
        </Typography>

        <form onSubmit={handleLogin} className="space-y-5">
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white"
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white"
          />

          <div className="flex justify-between items-center">
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember me"
            />
            <Typography
              variant="body2"
              className="text-orange-600 cursor-pointer"
            >
              Forgot Password?
            </Typography>
          </div>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            className="!bg-orange-500 hover:!bg-orange-600 !text-white !py-2 !rounded-md"
          >
            Login
          </Button>

          <Typography variant="body2" className="text-center text-gray-500">
            Don’t have an account?{" "}
            <span className="text-orange-600 cursor-pointer">Sign Up</span>
          </Typography>
        </form>
      </Paper>
    </div>
  );
}
