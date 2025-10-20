# How to check Microfrontends in this repo

1. **Install dependencies for both apps**
   ```bash
   cd host-app
   npm install
   cd ../remote-app
   npm install
   ```

2. **Start the remote app**
   ```bash
   npm run dev
   ```
   By default, this will run on `http://localhost:5001`.

3. **Start the host app** (open a new terminal)
   ```bash
   cd ../host-app
   npm run dev
   ```
   By default, this will run on `http://localhost:5000`.

4. **Visit the host app in your browser**
   Go to `http://localhost:5000`. You should see content loaded from the remote app (microfrontend).

That's it! Now any change in the remote app should reflect in the host app (after reload).
