# This is an example of using external parameters file for your tests


### One usage example is using test data by reading it from an external json parameters file.
* In the ```readFromParamFile.js``` example the test data is read from parameters.js file. (Attached)
* Using this method you can pass dynamic data for your tests instead of setting "hard-coded" data.

## You can also set an environment variable that can be used in your test
* In the following ```passEnvVariablesExample.js``` example the BASE_URL is exposed for tdk as an env variable.
