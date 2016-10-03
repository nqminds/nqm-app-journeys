import React from "react";
import {mount} from "react-mounter";
import {FlowRouter} from "meteor/kadira:flow-router";
import injectTapEventPlugin from 'react-tap-event-plugin';

import connectionManager from "../../api/manager/connection-manager";
import Layout from "../../ui/layouts/layout-container";
import Explorer from "../../api/manager/components/explorer";
//import ResourceData from "../../api/manager/containers/resource-data-container";

injectTapEventPlugin();

// Register a trigger to be called before every route.
FlowRouter.triggers.enter([function(context, redirect) {
  // If the connection manager hasn't established a DDP connection yet, do it now.
  if (!connectionManager.connected) {
    connectionManager.connect();
  }
  // If there is an access token on the query string, use it to authenticate the connection.
  if (context.queryParams.access_token) {
    connectionManager.useToken(context.queryParams.access_token);
    // Redirect to root page after authentication.
    redirect("/");
  }
}]);


FlowRouter.route("/", {
  name: "root",
  action: function(params, queryParams) {
	console.log(params)
    mount(Layout, { content: function() { return <Explorer parent={params.parent} />; } });
  }
});

// Redirect to the TDX auth server - as configured in the "authServerURL" property in settings.json 
FlowRouter.route("/auth-server", {
  name: "authServerRedirect",
  triggersEnter: [function(context, redirect) {
    console.log("redirecting to auth server");
    window.location = Meteor.settings.public.authServerURL + "/auth/?rurl=" + window.location.href;        
  }]  
});

// Logout 
FlowRouter.route("/logout", {
  name: "logout",
  triggersEnter: [function(context, redirect) {
    connectionManager.logout();
    redirect("/");
  }]
});
