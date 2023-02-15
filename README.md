Welcome to Kaizen Ramen's Website!!

This is a site made for a fictional noodle bar named Kaizen Ramen. It was made with react-create-app, semantic-ui, react-router-dom and a json-server.

To run it on your machine you will need to fork and clone it from the GitHub repository, install dependancies, and run rpm start and run the json-server.

Once started, you will find six react components, <App/>, <Home/>, <Menu/>, <About/>, <Admin/> and <NavBar/>.

In the <App/> component there are two useState hooks that control the events array and whether or not an admin user is logged in. It also uses a useEffect hook to fetch the event data from db.json. It then returns all its child components.

The <Home/> component uses a <img> to return a .jpeg file imported to the component directly. There are two <p> tags that share a few short messages.

The <NavBar/> is top fixed and rendered no matter where you are on the page and displays four buttons that route you to the different components using react-router-dom and the Link feature.

The About component uses .map() on the events array stored in state, passed as a prop from <App/>, it returns a list <Item/> for every event in events.

The <Admin/> component takes the isLoggedIn variable from <App/>. If false, it will render the Login <form>. If true, it will render two controlled components elements. The Login <form> takes in a username and a password and stores them in state. When submitted, if there is a match for both in db.json it will call setIsLoggedIn to true.  The controlled components rendered if isLoggedIn is true both submit POST requests to db.json using the values stored in state for each input.