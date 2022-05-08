import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <h2 className="title">GO THROUGH THESE BLOGS</h2>
      <div className="style-bar"></div>
      <div className="container blog-para">
        <div className="per-blog">
          <h5>Differences between javascript and node.js.</h5>
          <p>
            JavaScript is a just-in-time compiled programming language which
            runs in any browser through javascript Engine whereas Node.js is a
            back-end JavaScript runtime environment which helps to execute
            JavaScript code outside. Basically JavaScript is used for front-end
            development on the client side and Node.js is used for server side
            development. JavaScript is capable to run in any browser engine such
            as Spidermonkey, JS core etc but node.js is capable to run v8 engine
            that parse in Google chrome. There are some framework and libraries
            of javascript like react.js, Vue.js, angular.js etc But node.js
            frameworks are express, Lodash etc. JavaScript programming language
            is written in c++ and node.js is written in c, c++ and JavaScript.
          </p>
        </div>
        <div className="per-blog">
          <h5>What is the purpose of jwt and how does it work?</h5>
          <p>
            Jwt means JSON web token is a standard shared security information
            system between a client and server. It is a cryptographic algorithm
            that ensure claims not to alter after the token is issued. A jwt
            made up of 3 portion which separated by dots and serialized using
            base64. Once the code decoded we got the header and the payload, a
            signature. Header contains signing algorithm. The payload containing
            the claims displayed in a JSON string. The signature always ensures
            the token not been altered. User who creates the jwt sign with
            header and payload creates a secret random code which is known to
            both issuer and receiver. And after send it, the receiving party
            verifies that header and payload match the signature.
          </p>
        </div>
        <div className="per-blog">
          <h5>Differences between sql and nosql databases.</h5>
          <p>
            Sql database is a fixed or static predefined schema relational
            database management system and NoSql is a dynamic schema
            non-relational or distributed database system. Sql is a vertically
            scalable database management system whereas NoSql is a horizontally
            scalable database system. Both of them are not perfect for a single
            purpose database system. Each system has different advantage or
            disadvantage according to there field. About Hierarchical data
            storage Sql is not suited for it but Nosql is the best suited for
            it. Sql follows ACID property and thats why it is best suited for
            complex queries. On the otherhand, Nosql follows consistency,
            availability and partition tolerance which is not so good for
            complex queries. Sql is table-based and better for multi-row
            transactions but NoSql is document, graph etc based and better for
            unstructured data like JSON.
          </p>
        </div>
        <div className="per-blog">
          <h5>When should you use node.js and when should you use mongodb?</h5>
          <p>
            Node.js is runtime environment for javascript code executer on
            google chrome v8 engine. And mongodb is a no-sql database storing
            system where you can store data fast or instant recovery. In every
            project runtime environment helps programing language code to
            compile or interpret. Node.js is also such kind of tool which helps
            to execute javascript programming language. There are couple of such
            tools like this such as Go, PHP, C# etc. On the otherhand, if data
            of any projects need to store persistently which also can
            efficiently update or filter later as need then we use mongodb.
            There are also couple of no-sql database system like MySql, DynamoDB
            etc. But mongodb has some advantages like full cloud-based app data
            platform, flexible, update-friendly etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
