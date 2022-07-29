
const vscode = require('vscode');



/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {


	let disposable = vscode.commands.registerCommand('ethiopic.date', function () {

		const m = new Intl.DateTimeFormat("am", {calendar: "ethiopic", month: "long" }).format()
		const d = new Intl.DateTimeFormat("am", {calendar: "ethiopic", day:"numeric" }).format()
		const y = new Intl.DateTimeFormat("am", {calendar: "ethiopic", year:"numeric" }).format()
		
		vscode.window.showInformationMessage("ዛሬ - " + m + " " + d +" " +y);
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
