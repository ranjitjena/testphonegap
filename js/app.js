// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {


  //var homeTpl = Handlebars.compile($("#home-tpl").html());
  //ar employeeListTpl = Handlebars.compile($("#employee-list-tpl").html());

  HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
  EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html());
  EmployeeView.prototype.template = Handlebars.compile($("#employee-tpl").html());


    /* ---------------------------------- Local Variables ---------------------------------- */
    /*var service = new EmployeeService();
    service.initialize().done(function () {
        console.log("Service initialized");
    });*/

    var service = new EmployeeService();
    service.initialize().done(function () {
        router.addRoute('', function() {
            $('body').html(new HomeView(service).render().$el);
        });

        router.addRoute('employees/:id', function(id) {
            service.findById(parseInt(id)).done(function(employee) {
                $('body').html(new EmployeeView(employee).render().$el);
            });
        });

        router.start();
    });
    /* --------------------------------- Event Registration -------------------------------- */
    //$('.search-key').on('keyup', findByName);
    
    //$('.help-btn').on('click', function() {
     //   alert("Employee Directory v3.4");
    //});

    /* ---------------------------------- Local Functions ---------------------------------- */

    
 
}());