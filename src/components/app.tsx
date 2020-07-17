import { h, Component } from "preact";
import { Route, Router } from "preact-router";
import { Provider } from "@preact/prerender-data-provider";
import Header from "./header";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Blogs from "../routes/blogs";
import Blog from "../routes/blog";
import Contact from "../routes/contact";
import ContactSuccess from "../routes/contact-success";
import NotFoundPage from "../routes/notfound";

export default class App extends Component {
  currentUrl?: string;
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render(props) {
    return (
      <Provider value={props}>
        <div id="app">
          <Header />
          <main>
            <Router onChange={this.handleRoute}>
              <Route component={Home} path="/" />
              <Route component={Blogs} path="/blogs/" />
              <Route component={Blog} path="/blog/:name" />
              <Route component={Contact} path="/contact/" />
              <Route component={ContactSuccess} path="/contact/success" />
              <Route component={NotFoundPage} type="404" default />
            </Router>
          </main>
        </div>
      </Provider>
    );
  }
}
