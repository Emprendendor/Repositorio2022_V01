


<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Sirevo</title>
        <link rel="shortcut icon" href="media/sirevo-ico.png" />
        <link href="https://fonts.googleapis.com/css?family=Bungee|Press+Start+2P|Source+Code+Pro" rel="stylesheet">
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link rel="stylesheet" href="css/bootstrap.min.css" media="screen" title="no title" />
        <link rel="stylesheet" href="css/app.css" />
    </head>
    <body class="container-fluid">
        <main>

            <%--Metodo que se encarga de renderizar la sección requerida--%>
            <%if(request.getParameter("page") != null){
                String contextPath = "WEB-INF/jspf/";
                String content = request.getParameter("page");
                String ext = ".jsp";
                content = contextPath + content + ext;
            %>
                <%-- <p> <%= content %> Esto era para verificar que la ruta estubiese llegando correctamente --%>
        
    
           <% }  %>

 
        </main>
        <script src="js/jquery-3.2.1.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <script src="js/app.js"></script>
    </body>
</html>