# local-modules-as-globals
Import local modules like node_modules/ :fire: 

## Usage

1 . Make any local folder in your project global
```js
// At the top of myProject/server/index.js
import makeItGlobal from 'local-modules-as-globals'
makeItGlobal(__dirname)
...
```

2 . You can then require from any locally-global directory using the `@` prefix.

```js
myProject/
	server/
		index.js
			| ...
			| import makeItGlobal from 'local-modules-as-globals'
			| makeItGlobal(__dirname)
			| ...

		myModules/
			moduleA/ /* My moduleA */
			moduleB/ /* My moduleB */
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