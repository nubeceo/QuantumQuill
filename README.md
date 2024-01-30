# QuantumQuill

QuantumQuill is an open-source forum for techies, allowing users to write and publish blog posts. It is built using Vite React, Tailwind CSS, and several other packages to enhance the development experience.

## Prerequisites

Before you begin, ensure you have the following dependencies installed:

- [Node.js](https://nodejs.org/) (>=12.0.0)
- [npm](https://www.npmjs.com/) (>=6.0.0)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/QuantumQuill.git
   cd QuantumQuill
2. **Install Vite React depndecies:**
   ```bash
   npm install
3.**Visit Appwrite and create an account. Set up a new project and note down the project API endpoint and API key.

   Update the Appwrite configuration in src/services/appwrite.js :**
   ```bash
   echo 'const appwrite = new Appwrite();' > src/services/appwrite.js
   echo "appwrite.setEndpoint('YOUR_APPWRITE_ENDPOINT').setProject('YOUR_APPWRITE_PROJECT_ID');" >> src/services/appwrite.js
   echo "appwrite.setKey('YOUR_APPWRITE_API_KEY');" >> src/services/appwrite.js

