# Answers

1. Explain the differences between `client-side routing` and
   `server-side routing`

> Server Side routing is the way that the HTTP Client-Server relationship works
> “by default”. This means that every resource that the client (browser)
> requests is responded to by the server; and the server responds with a full
> page. The benefit of this is that search engines are actually built for this
> model, but the con is that every request from the client triggers a render.
> Client-side routing, by contrast, happens _inside_ the browser without having
> to make a full request to the server. The benefit of this is both that less
> data is processed in the request and also that only the data that has changed
> needs to re-render. The negatives of client side routing is that the first
> request the client makes to the server for your site has to download the
> _entire_ site, it also takes a huge hit on search engine results.

1. What does HTTP stand for?

> HyperText Transfer Protocol

1. What does CRUD stand for?

> Create, Read, Update, Delete

1. Which HTTP methods can be mapped to the CRUD acronym that we use when
   interfacing with APIs/Servers.

> Create maps to the HTTP POST method, Read maps to GET, Update maps to
> PUT/PATCH, and Delete maps to DELETE.

1. Mention three tools we can use to make AJAX requests

> XMLHTTPRequest, Fetch, and Axios.
