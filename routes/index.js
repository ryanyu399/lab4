
/*
 * GET home page.
 */

exports.view = function(req, res){
    {{#each projects}}
      <div class="project" id="{{id}}">
        <a href="project" class="thumbnail">
          <img src="images/{{image}}" ... />
          <p>{{name}}</p>
        </a>
      </div>
    {{/each}}
};