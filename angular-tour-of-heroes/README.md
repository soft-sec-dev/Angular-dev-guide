### Angular Tour Heroes Resume
1. The Hero Editor
- Without stand alone-components
- Two ways to bindind [(ngModel)] -> must be import `FormModule` to use it
- ngModel is better to reduce the initial configuration about about the depedencies

2. Display a selection list
- event binding -> (onCheck) (onClick)
- class binding -> bind css class with conditional angular directives

3. Create a feature component
- @Input() one way data binding -> parent to child 

4. Add Service
- Dependency inyection system
- Returning `Observable` using of() simialr to -> [http.client.get()](https://angular.io/tutorial/tour-of-heroes/toh-pt6) -> method asyncronic
- service in service -> two service with comunication betwen thems

5. Agregar navegación con enrutamiento
- Generate with -> `ng generate module app-routing --flat --module=app`
- Localizar la ruta -> ActivateRoute and Location 
