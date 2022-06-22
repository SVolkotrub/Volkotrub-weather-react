import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import App from "./app/App";
import "./styles.css";


import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);