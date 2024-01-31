import config from "../config/Config";
import { Client, ID, Databases, Storage, Query } from 'appwrite'


export class Service {

    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(config.APPWRITE_URL)
            .setProject(config.APPWRITE_PROJECT_ID)
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImg, status, userId }) {
        try {
            return await this.databases.createDocument(
                config.APPWRITE_DATABASE_ID,
                config.APPWRITE_COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    async updatePost(slug, { title, content, featuredImg, status }) {
        try {
            return await this.databases.updateDocument(
                config.APPWRITE_DATABASE_ID,
                config.APPWRITE_COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status,
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.APPWRITE_DATABASE_ID,
                config.APPWRITE_COLLECTION_ID,
                slug,
            )
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.APPWRITE_DATABASE_ID,
                config.APPWRITE_COLLECTION_ID,
                slug,
            )
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async listPost(queries = [Query.equal("status","active")]) {
        try {
            return await this.databases.listDocuments(
                config.APPWRITE_DATABASE_ID,
                config.APPWRITE_COLLECTION_ID,
                queries
            )
        } catch (error) {
            console.log(error);
            return false;
        }
    }


    // file upload methods

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                config.APPWRITE_BUCKET_ID,
                ID.unique(),
                file,

            )
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            return await this.storage.deleteFile(
                config.APPWRITE_BUCKET_ID,
                fileId,
            )
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getFilePreview(fileId){
        try {
            return this.storage.getFilePreview(
                config.APPWRITE_BUCKET_ID,
                fileId,
                
            )
        } catch (error) {
            console.log(error);
            return false;
        }
    }


};



const service = new Service();

export default service;