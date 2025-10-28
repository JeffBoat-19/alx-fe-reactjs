import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./PostsComponent";

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <h1>React Query Demo - Posts</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
