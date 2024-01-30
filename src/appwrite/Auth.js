import config from "../config/Config";
import { Client, ID, Account } from 'appwrite'


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.APPWRITE_URL)
            .setProject(config.APPWRITE_PROJECT_ID);
        this.account = new Account(this.client)
    }


    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                // call login function
                this.loginAccount({ email, password });

            } else {
                return userAccount;
            }

        } catch (error) {
            throw error;
        }
    }

    async loginAccount({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }

        return null;
    }

    async logoutAccount(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService
