export const navigation = {
    baseUrl: "http://localhost:5173",
  
    // Method to get the home URL
    getHomeUrl() {
      return "/";
    },
  
    // Method to get the about URL
    getAboutUrl() {
      return "/about";
    },
  
    // Method to get the build composition URL
    getWritePostUrl() {
      return "/CreatePost";
    },
  
  
    // Method to get the feedback URL
    getFeedBackUrl() {
      return "/feedback";
    },
  
    // Method to get the page not found URL
    getPageNotFoundUrl() {
      return "/*";
    },
  
    // Method to get the login URL
    getLoginUrl() {
    return "/login";
    },
    // Method to get the logout URL
    getLogoutUrl() {
      return "/logout";
    },
  
    // Method to get the shop basket URL
    getDashboardUrl() {
      return "/dashboard";
    },
  
    getCommentFromUrl() {
      return "/comment";
    },
    
  };