
# WebApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.
and ng-zorro

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# 页面展示


# 细节
接口地址代理

#目录
````
 
 ---
│  favicon.ico
│  index.html
│  main.ts
│  polyfills.ts
│  styles.scss
│  test.ts
│  tree.txt
│  
├─app
│  │  app-routing.module.ts
│  │  app.component.html
│  │  app.component.spec.ts
│  │  app.component.ts
│  │  app.module.ts
│  │  
│  ├─core
│  │  │  core.module.ts
│  │  │  
│  │  ├─guard
│  │  │      login-guard.ts
│  │  │      
│  │  ├─http
│  │  │      base.interceptor.ts
│  │  │      
│  │  ├─request
│  │  │      request.service.spec.ts
│  │  │      request.service.ts
│  │  │      
│  │  └─startup
│  │          startup.factory.ts
│  │          startup.service.spec.ts
│  │          startup.service.ts
│  │          
│  ├─interface
│  │      appInfo.ts
│  │      menuInfo.ts
│  │      userInfo.ts
│  │      
│  ├─layout
│  │  │  layout.module.ts
│  │  │  
│  │  ├─default
│  │  │  │  default.component.html
│  │  │  │  default.component.scss
│  │  │  │  default.component.spec.ts
│  │  │  │  default.component.ts
│  │  │  │  
│  │  │  ├─footer
│  │  │  │      footer.component.html
│  │  │  │      footer.component.scss
│  │  │  │      footer.component.spec.ts
│  │  │  │      footer.component.ts
│  │  │  │      
│  │  │  ├─header
│  │  │  │      header.component.html
│  │  │  │      header.component.scss
│  │  │  │      header.component.spec.ts
│  │  │  │      header.component.ts
│  │  │  │      
│  │  │  └─sider
│  │  │          sider.component.html
│  │  │          sider.component.scss
│  │  │          sider.component.spec.ts
│  │  │          sider.component.ts
│  │  │          
│  │  └─vertical
│  │          vertical.component.html
│  │          vertical.component.scss
│  │          vertical.component.spec.ts
│  │          vertical.component.ts
│  │          
│  ├─page
│  │  │  page-routing.module.ts
│  │  │  page.module.ts
│  │  │  
│  │  ├─account
│  │  │  │  account-routing.module.ts
│  │  │  │  account.module.ts
│  │  │  │  
│  │  │  └─login
│  │  │          login.component.html
│  │  │          login.component.scss
│  │  │          login.component.spec.ts
│  │  │          login.component.ts
│  │  │          
│  │  ├─dashboard
│  │  │      dashboard-routing.module.ts
│  │  │      dashboard.component.html
│  │  │      dashboard.component.scss
│  │  │      dashboard.component.spec.ts
│  │  │      dashboard.component.ts
│  │  │      dashboard.module.ts
│  │  │      
│  │  ├─example
│  │  │  │  example-routing.module.ts
│  │  │  │  example.module.ts
│  │  │  │  
│  │  │  ├─form
│  │  │  │      form.component.html
│  │  │  │      form.component.scss
│  │  │  │      form.component.spec.ts
│  │  │  │      form.component.ts
│  │  │  │      
│  │  │  ├─table
│  │  │  │      table.component.html
│  │  │  │      table.component.scss
│  │  │  │      table.component.spec.ts
│  │  │  │      table.component.ts
│  │  │  │      
│  │  │  ├─table-tree
│  │  │  │      table-tree.component.html
│  │  │  │      table-tree.component.scss
│  │  │  │      table-tree.component.spec.ts
│  │  │  │      table-tree.component.ts
│  │  │  │      
│  │  │  └─tree
│  │  │          tree.component.html
│  │  │          tree.component.scss
│  │  │          tree.component.spec.ts
│  │  │          tree.component.ts
│  │  │          
│  │  └─exception
│  │      │  exception-routing.module.ts
│  │      │  exception.module.ts
│  │      │  
│  │      └─notfound404
│  │              notfound404.component.html
│  │              notfound404.component.scss
│  │              notfound404.component.spec.ts
│  │              notfound404.component.ts
│  │              
│  ├─services
│  │  │  services.module.ts
│  │  │  
│  │  ├─account
│  │  │  ├─auth
│  │  │  │      auth.service.spec.ts
│  │  │  │      auth.service.ts
│  │  │  │      
│  │  │  └─login
│  │  │          login.service.spec.ts
│  │  │          login.service.ts
│  │  │          
│  │  └─core
│  │      └─menu
│  │              menu.service.spec.ts
│  │              menu.service.ts
│  │              
│  └─shared
│      │  shared.module.ts
│      │  
│      └─ng-zorro
│          ├─de-form
│          │      de-form.component.html
│          │      de-form.component.scss
│          │      de-form.component.spec.ts
│          │      de-form.component.ts
│          │      
│          ├─de-table-tree
│          │      de-table-tree.component.html
│          │      de-table-tree.component.scss
│          │      de-table-tree.component.spec.ts
│          │      de-table-tree.component.ts
│          │      
│          ├─de-tree
│          │      de-tree.component.html
│          │      de-tree.component.scss
│          │      de-tree.component.spec.ts
│          │      de-tree.component.ts
│          │      
│          ├─df-auto-complete
│          │      df-auto-complete.component.html
│          │      df-auto-complete.component.scss
│          │      df-auto-complete.component.spec.ts
│          │      df-auto-complete.component.ts
│          │      
│          ├─df-autoComplete
│          └─df-table
│                  df-table.component.html
│                  df-table.component.scss
│                  df-table.component.spec.ts
│                  df-table.component.ts
│                  
├─assets
│  │  .gitkeep
│  │  
│  ├─api
│  │      menuList.json
│  │      menuList.ts
│  │      
│  ├─i18n
│  │      en.json
│  │      zh.json
│  │      
│  └─images
│          404.jpg
│          app.png
│          app.svg
│          avatar.svg
│          inspur.png
│          setup.svg
│          
└─environments
        environment.prod.ts
        environment.ts
        


```
