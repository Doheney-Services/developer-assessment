"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserIdFromToken = void 0;
const jwt = require("jsonwebtoken");
function getUserIdFromToken(token) {
    try {
        const decodedToken = jwt.verify(token, 'your_secret_key_here');
        const userId = decodedToken.userId;
        return userId;
    }
    catch (error) {
        return null;
    }
}
exports.getUserIdFromToken = getUserIdFromToken;
//# sourceMappingURL=token.util.js.map