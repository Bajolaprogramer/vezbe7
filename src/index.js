"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bank_1 = require("./services/bank");
var bank = new bank_1.Bank();
var user1 = { id: 1, name: "Lazar", email: "lazar.bajic2002@gmail.com" };
bank.registerUser(user1);
bank.openAcount(user1);
bank.openAcount(user1);
bank.displayUserAccounts(user1.id);
