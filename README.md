# local-modules-as-globals
Import local modules like node_modules/ :fire: 

## Usage

1 . Import `makeItGlobal`
```js
import makeItGlobal from 'local-modules-as-globals'
```

2 . Make any local folder in your project global
```js
// myProject/server/index.js
...
makeItGlobal(__dirname)
```

3 . You can then require from any locally-global directory using the `@` prefix.

```
myProject/
	server/
		index.js
			| ...
			| import makeItGlobal from 'local-modules-as-globals'
			| makeItGlobal(__dirname)
			| ...

		myModules/
			moduleA/
			moduleB/
		far/
			away/
				...
				require('@myModules/moduleA') // Will require /myProject/server/myModules/moduleA
				...
		other/
			place/
				...
				require('@myModules/moduleB') // Will require /myProject/server/myModules/moduleB
				...
```