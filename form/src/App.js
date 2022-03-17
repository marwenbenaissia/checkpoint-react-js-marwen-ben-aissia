import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
function App() {
  return (
  <div class="body">
  <div class="container">
  <div class="frame">
    <div class="nav">
      <ul class="links">
        <li class="signin-active">Inscription</li>
      </ul>
    </div>
    <div ng-app ng-init="checked = false">
				<form class="form-signin" action="" method="post" name="form">
          <label for="firstname">FirstName</label>
          <input class="form-styling" type="text" name="firstname" placeholder=""/>
          <label for="Lastname">LastName</label>
          <input class="form-styling" type="text" name="Lastname" placeholder=""/>
          <label for="E-mail">E-mail</label>
          <input class="form-styling" type="text" name="E-mail" placeholder=""/>
          <label for="Age">Age</label>
          <input class="form-styling" type="number" name="Age" placeholder=""/>
          <label for="password">PassWord</label>
          <input class="form-styling" type="password" name="password" placeholder=""/>
          <label for="password">Confirm PassWord</label>
          <input class="form-styling" type="password" name="password" placeholder=""/>
          <input type="checkbox" id="checkbox"/>
          <label for="checkbox" ><span class="ui"></span>Keep me signed in</label>
          <button class="btn-animate">Sign in</button>
				</form>
      </div>
  </div>
</div>
</div>
  );
}

export default App;
