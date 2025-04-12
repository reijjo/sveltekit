export const prerender = true;
// The advantage is that serving static data is extremely cheap and performant,
// allowing you to easily serve large numbers of users without worrying about
// cache-control headers (which are easy to get wrong).

// The tradeoff is that the build process takes longer, and prerendered content can only
// be updated by building and deploying a new version of the application.
