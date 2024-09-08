// src/services/api.js
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

export const fetchProducts = () => axios.get(`${API_URL}/products`);
export const fetchProductById = (id) => axios.get(`${API_URL}/products/${id}`);
const express = require('express');
const path = require('path');
const app = express();

