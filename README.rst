===============
Express & React
===============

Express backend & React frontend

Run
===

Run docker and visit http://localhost:3000::

    $ docker-compose up

How to build it from scratch?
=============================

1. Create project folder::

    $ mkdir express-react
    $ cd express-react

2. Install ``express-generator``::

    $ npm install express-generator -g

3. Create Express backend app, install dependencies::

    $ express back
    $ cd back
    $ npm install

4. Change default port from ``3000`` to ``8000`` in ``bin/www``.

5. Create React frontend app in project folder, install dependencies::

    $ npx create-react-app front
    $ cd front
    $ npm install

6. Add ``"proxy": "http://back:8000"`` to the package.json in frontend app.

7. Create separate ``Dockerfile`` in back and front apps and ``docker-compose.yml`` in project folder.
