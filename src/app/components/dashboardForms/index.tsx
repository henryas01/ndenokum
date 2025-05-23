"use client";

import { useState } from "react";
import {
  TextField,
  Button,
  Tabs,
  Tab,
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Inventory2 from "@mui/icons-material/Inventory2";
import Percent from "@mui/icons-material/Percent";
import Groups from "@mui/icons-material/Groups";

export default function DashboardForms() {
  const [tab, setTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderForm = () => {
    switch (tab) {
      case 0:
        return (
          <Box className="space-y-4">
            <Typography variant="h6">Add Product</Typography>
            <TextField label="Product Name" fullWidth variant="outlined" />
            <TextField
              label="Price"
              type="number"
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={3}
              variant="outlined"
            />
            <Button
              variant="contained"
              className="!bg-orange-500 hover:!bg-orange-600 !text-white"
            >
              Submit
            </Button>
          </Box>
        );
      case 1:
        return (
          <Box className="space-y-4">
            <Typography variant="h6">Add Promo</Typography>
            <TextField label="Promo Code" fullWidth variant="outlined" />
            <TextField
              label="Discount (%)"
              type="number"
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={2}
              variant="outlined"
            />
            <Button
              variant="contained"
              className="!bg-orange-500 hover:!bg-orange-600 !text-white"
            >
              Submit
            </Button>
          </Box>
        );
      case 2:
        return (
          <Box className="space-y-4">
            <Typography variant="h6">Add Testimonial</Typography>
            <TextField label="Customer Name" fullWidth variant="outlined" />
            <TextField
              label="Message"
              fullWidth
              multiline
              rows={3}
              variant="outlined"
            />
            <TextField
              label="Rating (1-5)"
              type="number"
              fullWidth
              variant="outlined"
            />
            <Button
              variant="contained"
              className="!bg-orange-500 hover:!bg-orange-600 !text-white"
            >
              Submit
            </Button>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AppBar position="static" className="!bg-orange-500">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="ml-4">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box role="presentation" onClick={toggleDrawer} className="w-64">
          <List>
            <ListItem onClick={() => setTab(0)}>
              <ListItemIcon>
                <Inventory2 />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem onClick={() => setTab(1)}>
              <ListItemIcon>
                <Percent />
              </ListItemIcon>
              <ListItemText primary="Promotions" />
            </ListItem>
            <ListItem onClick={() => setTab(2)}>
              <ListItemIcon>
                <Groups />
              </ListItemIcon>
              <ListItemText primary="Testimonials" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <div className="py-10 px-5">
        <Box className="bg-white rounded-lg shadow-md max-w-2xl mx-auto p-6">
          <Tabs value={tab} onChange={handleTabChange} variant="fullWidth">
            <Tab label="Product" />
            <Tab label="Promo" />
            <Tab label="Testimonial" />
          </Tabs>
          <Box mt={4}>{renderForm()}</Box>
        </Box>
      </div>
    </div>
  );
}
