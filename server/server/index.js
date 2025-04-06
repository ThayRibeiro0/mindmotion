"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_js_1 = require("./config/database.js");
const auth_js_1 = __importDefault(require("./routes/auth.js"));
const meditation_js_1 = __importDefault(require("./routes/meditation.js")); // Ensure this exports an Express router
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)({ origin: "http://localhost:5173" }));
app.use(express_1.default.json()); // to acess the req.body
// Routes to the application
app.use('/api/auth', auth_js_1.default);
app.use('/api/meditation', meditation_js_1.default);
// Initialize the database connection and start the server
const startServer = async () => {
    try {
        await database_js_1.sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
        await database_js_1.sequelize.sync(); // sicronyze the database
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    }
    catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    }
};
startServer();
exports.default = app;
