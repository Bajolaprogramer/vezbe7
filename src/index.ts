import { Bank } from "./services/bank";

const bank = new Bank();
const user1={id:1,name:"Lazar",email:"lazar.bajic2002@gmail.com" };
bank.registerUser(user1);
bank.openAcount(user1);
bank.openAcount(user1);
bank.displayUserAccounts(user1.id);