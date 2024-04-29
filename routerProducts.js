const express = require("express");
const multer = require("multer");
const routerProducts = express.Router();
const upload = multer();

// 1. 使用routerProducts.js
// 2. 路由規則寫於routerProducts.js
// 3. 參照講義把產品API的路由規則建立
// 4. 上傳github mail給老師repo

routerProducts.get("/api/products", (req, res) => {
  res.status(200).json({ message: "獲取所有產品" });
});
// 狀態碼：401 Unauthorized / 403 Forbidden / 404 Not Found

routerProducts.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `獲取特定 ID 的產品 ${id}` });
});
// 狀態碼：404 Not Found

routerProducts.post("/api/products/", upload.none(), (req, res) => {
  res.status(201).json({ message: "新增一個產品" });
});
// 狀態碼：400 Bad Request

routerProducts.put("/api/products/:id", upload.none(), (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `更新特定 ID 的產品 ${id}` });
});
// 狀態碼：400 Bad Request / 404 Not Found

routerProducts.delete("/api/products/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `刪除特定 ID 的產品 ${id}` });
});
// 狀態碼：404 Not Found

routerProducts.get("/api/products/search", (req, res) => {
  const id = req.query.id;
  res.status(200).json({ message: `使用 ID 作為搜尋條件來搜尋產品 ${id}` });
});
// 狀態碼：400 Bad Request / 404 Not Found

module.exports = routerProducts;