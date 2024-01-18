# Local json-server Setup/Usage

## Setup/install

1. If not installed, please install json-server as a dev-dependancy: `yarn add json-server -D`
2. Now create your mock data, something like this: `mock-calendar-data.json`

- **Note** this will need to be a semantically-valid json file, otherwise it will not load. You can validate your json data here: `https://jsonlint.com/`

## Running local Json server

1. Via Terminal/CMD navigate to the folder directory of your new json file
2. From Terminal/CMD, now run `json-server --watch mock-calendar-data.json`
3. Your new json server should now provide you an API end point in which to access your json-data, which should look something like this: `http://localhost:3000/drawDates` - with `/drawDates` being the object within the json file that houses your data.

## Accessing local json-server

Simply use a jQuery Ajax call to retrieve your data:

```
$.ajax({
	url:  url,
	method:  "GET",
	contentType:  "application/json; charset=utf-8",
	dataType:  "json",
	success:  function  success(response) {
		console.log(response);
	},
	fail:  function (error) {
		console.log(error);
	}
});
```

## Options for testing

- ** Force a delay in retrieving json data **: `json-server --watch mock-calendar-data.json --delay 30000`
- ** Return a 404 ** (or any server response required): This website allows you to select the type of response, so you can test all scenarios required. Here is 404 example: `https://httpstat.us/404"` ~ just swap out 404, for whatever response you require.
