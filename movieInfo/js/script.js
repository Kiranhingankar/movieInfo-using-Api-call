 $(document).ready(function(){
       $('#searchForm').on("submit",function(e){
           let searchText = $("#searchText").val();
           getMovies(searchText);
           e.preventDefault();
    });
     function getMovies(searchText){
     axios.get('http://www.omdbapi.com/?s='+this.searchKey+'&apikey=e0620db4')
  .then(function (response) {
        let movies = response.data.search;
         let output = "";
         
         $.each(movies, (index, movie) => {
             output += '
             <div class="col-lg-3">
                 <div class="well">
                     <img src="${movie.poster}"/>
                         <h5>${movie.Title}</h5>
             </div>
             </div>
             ';
                    $("#movies").html(output);
         });
  })