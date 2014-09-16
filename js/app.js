// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {


  //var homeTpl = Handlebars.compile($("#home-tpl").html());
  //ar employeeListTpl = Handlebars.compile($("#employee-list-tpl").html());

  HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
  EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html());


    /* ---------------------------------- Local Variables ---------------------------------- */
    /*var service = new EmployeeService();
    service.initialize().done(function () {
        console.log("Service initialized");
    });*/

    var service = new EmployeeService();
    service.initialize().done(function () {
      //renderHomeView();
       $('body').html(new HomeView(service).render().$el);
    });

    /* --------------------------------- Event Registration -------------------------------- */
    //$('.search-key').on('keyup', findByName);
    
    //$('.help-btn').on('click', function() {
     //   alert("Employee Directory v3.4");
    //});

    /* ---------------------------------- Local Functions ---------------------------------- */

    this.findByName = function() {
      service.findByName($('.search-key').val()).done(function(employees) {
          employeeListView.setEmployees(employees);
      });
    };

    this.render = function() {
      this.$el.html(this.template());
      $('.content', this.$el).html(employeeListView.$el);
      return this;
    };
 
}());