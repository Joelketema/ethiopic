
const vscode = require('vscode');



/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {


	let disposable = vscode.commands.registerCommand('ethiopic.date', function () {

		const month = new Intl.DateTimeFormat("am", {calendar: "ethiopic", month: "long" }).format()
		const day = new Intl.DateTimeFormat("am", {calendar: "ethiopic", day:"numeric" }).format()
		const year = new Intl.DateTimeFormat("am", {calendar: "ethiopic", year:"numeric" }).format()
		
		vscode.window.showInformationMessage("ዛሬ - " + month + " " + day +" " +year);
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
