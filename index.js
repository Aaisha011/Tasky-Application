<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tasky Application</title>
  <link rel="stylesheet" href="index.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"> -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head> 
<body>
  <!-- navigation bar -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Tasky Application</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>

        <button class="btn btn-primary d-flex align-items-center gap-3" type="submit">
        <i class="fa-light fa-plus " mr-4></i>Add items here
        <br>
        </button>
  </nav>

  <div class="container">
    <!-- search window -->
    <section class="mt-5">
      <div class="row justify-content-center gap-7">
        <div class="col-sm-12 col-md-6 ">
          <div class="input-group flex-nowrap shadow-lg rounded">
            <input type="search" class="form-control" placeholder="search your task here...." aria-label="Search Task" aria-describedby="addon-wrapping">
             <span class="input-group-text" id="addon-wrapping">
               <i class="fa-solid fa-magnifying-glass"></i> 
             </span>
          </div>

          <div class="input-group flex-nowrap shadow-lg rounded">
            <input type="search" class="form-control" placeholder="search your task here...." aria-label="Search Task" aria-describedby="addon-wrapping">
             <span class="input-group-text" id="addon-wrapping">
               <i class="fa-solid fa-magnifying-glass"></i> 
             </span>
          </div>
            
        </div>

        <!-- cards section -->
        <section></section>

      </div>
    </section>
  </div>

<script src="index.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js
"></script>
</body>
</html>