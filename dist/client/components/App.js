"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
function App(props) {
    const [loggedIn, setLoggedIn] = (0, react_1.useState)(false);
    const [user, setUser] = (0, react_1.useState)();
    const getAccounts = (userId) => __awaiter(this, void 0, void 0, function* () {
        const accounts = yield axios_1.default.get(`/api/accounts/user/${userId}`);
        console.log(accounts);
    });
    const getCategories = (userId) => __awaiter(this, void 0, void 0, function* () {
        const categories = yield axios_1.default.get(`/api/categories/user/${userId}`);
        console.log(categories);
    });
    const getGroups = (userId) => __awaiter(this, void 0, void 0, function* () {
        const groups = yield axios_1.default.get(`/api/groups/user/${userId}`);
        console.log(groups);
    });
    const getPayees = (userId) => __awaiter(this, void 0, void 0, function* () {
        const payees = yield axios_1.default.get(`/api/payees/user/${userId}`);
        console.log(payees);
    });
    const getTransactions = (userId) => __awaiter(this, void 0, void 0, function* () {
        const transactions = yield axios_1.default.get(`/api/transactions/user/${userId}`);
        console.log(transactions);
    });
    const getUsers = () => __awaiter(this, void 0, void 0, function* () {
        const users = yield axios_1.default.get(`/api/users/`);
        console.log(users);
    });
    const login = () => __awaiter(this, void 0, void 0, function* () {
        const userResult = yield axios_1.default.post('/api/users/login', { username: 'smithjoseph', password: 'password' });
        if (userResult.status !== 200) {
            alert('Log in failed!');
        }
        setLoggedIn(true);
        setUser(userResult.data);
    });
    (0, react_1.useEffect)(() => {
        if (user) {
            const getStuff = (user) => __awaiter(this, void 0, void 0, function* () {
                yield getAccounts(user._id);
                yield getCategories(user._id);
                yield getGroups(user._id);
                yield getPayees(user._id);
                yield getTransactions(user._id);
                yield getUsers();
            });
            getStuff(user);
        }
    });
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Good Enough 2"),
        react_1.default.createElement("button", { onClick: login }, "Log In"),
        loggedIn && (react_1.default.createElement("div", null,
            react_1.default.createElement("h2", null, "Accounts"),
            react_1.default.createElement("button", null),
            react_1.default.createElement("h2", null, "Categories"),
            react_1.default.createElement("h2", null, "Groups"),
            react_1.default.createElement("h2", null, "Payees"),
            react_1.default.createElement("h2", null, "Sessions"),
            react_1.default.createElement("h2", null, "Transactions"),
            react_1.default.createElement("h2", null, "Users")))));
}
exports.default = App;
//# sourceMappingURL=App.js.map