import axios from "axios";

class BlogPostService {
    fetchLastPublishedBlogPost(): Promise<any> {
        return axios.get('https://api.martijnklene.nl/v1/blog-posts/last');
    }

    fetchAllBlogPosts(): Promise<any> {
        return axios.get('https://api.martijnklene.nl/v1/blog-posts');
    }

    fetchSingleBlogPostByIdentifier(identifier: string): Promise<any> {
        return axios.get('https://api.martijnklene.nl/v1/blog-posts/' + identifier);
    }
}

export default new BlogPostService();
