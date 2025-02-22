define({
	id: 'DE',
	name: 'Deutsch',
	texts: {
		preferences: {
			thousandSeparator: '.',
			decimalSeparator: ','
		},
		faults: {
			101: 'Die Brieftasche existiert nicht.',
			102: 'Die Brieftasche konnte nicht erstellt werden.',
			103: 'Die Brieftasche ist beschädigt. Bitte stelle die Brieftasche aus einem Backup wieder her.',
			104: 'Das Passwort ist nicht korrekt.',
			105: 'Es wurde kein Passwort für die Brieftasche eingegeben.',
			106: 'Bevor du eine Brieftasche benutzen kannst, muss sie geöffnet werden. Um sicher zu stellen, dass du berechtigt bist, die Brieftasche zu verwenden, musst du das Passwort für die Brieftasche eingeben.',
			107: 'Die Brieftasche enthält dieses Konto nicht.',
			108: 'Das Konto kann nicht entfernt werden. Der Grund ist meistens, dass der Kontostand größer als 0 XEM ist oder, dass Du versuchst, ein Hauptkonto zu entfernen.',
			109: 'Es gibt bereits eine Brieftasche mit diesem Namen. Bitte wähle einen anderen Namen für die Brieftasche.',
			110: 'Die Brieftasche enthält dieses Konto bereits.',
			111: 'Der Name der Brieftasche darf kein Dateiverzeichnis sein.',
			112: 'Die Dateiendung der Brieftasche ist falsch.',
			113: 'Die Brieftasche konnte nicht gelöscht werden.',
			121: 'Das Adressbuch existiert nicht.',
			122: 'Das Adressbuch konnte nicht erstellt werden.',
			123: 'Das Adressbuch ist beschädigt. Bitte stelle das Adressbuch aus einem Backup wieder her.',
			124: 'Das Passwort ist nicht korrekt.',
			125: 'Es wurde kein Passwort für das Adressbuch eingegeben.',
			127: 'Das Adressbuch enthält diese Adresse nicht.',
			128: 'Die Adresse ist ungültig.',
			129: 'Es gibt bereits ein Adressbuch mit diesem Namen. Bitte wähle einen anderen Namen für das Adressbuch.',
			130: 'Das Adressbuch enthält diese Adresse bereits.',
			131: 'Der Name des Adressbuches darf kein Dateiverzeichnis sein.',
			132: 'Die Dateiendung des Adressbuchs ist falsch.',
			133: 'Das Adressbuch konnte nicht gelöscht werden.',
			202: 'Die verschlüsselte Nachricht kann nicht gesendet werden, da der Empfänger bisher noch keine Transaktion gesendet hat und deswegen der öffentliche Schlüssel des Empfängers unbekannt ist.',
			203: 'Das Konto kann nicht umgewandelt werden, da nicht alle Mitsignierer bekannt sind. \'Bekannt\' heißt hier, dass die entsprechenden Konten entweder schon mal eine Transaktion gesendet oder empfangen haben müssen oder sich in deiner Brieftasche befinden müssen.',
			305: 'Der NEM Infrastructure Server (NIS) ist nicht verfügbar.\n\nEin Neustart der NEM Software könnte dieses Problem beheben.\n\nFalls du einen Remote-NIS benutzt, überprüfe den eingestellten Host auf Tippfehler oder benutze einen anderen Remote-NIS.',
			306: 'Es ist ein unvorhergesehener Fehler aufgetreten.\n\nSollte dieser Fehler wiederholt auftreten, könnte ein Neustart der NEM Software das Problem beheben. Falls nicht, eröffne bitte einen Thread in der NEM NIS/NCC Community.',
			400: 'Einer der Parameter fehlt oder ist ungültig.',
			401: 'Dieser Vorgang wurde aus Sicherheitsgründen unterbunden, denn der private Schlüssel könnte gestohlen werden, wenn er an einen Remote-NIS gesendet wird.',
			404: 'Die angeforderte Ressource wurde nicht gefunden.',
			500: 'Es ist ein unvorhergesehener Fehler aufgetreten.\n\nSollte dieser Fehler wiederholt auftreten, könnte ein Neustart der NEM Software das Problem beheben. Falls nicht, eröffne bitte einen Thread in der NEM NIS/NCC Community.',
			600: 'Der NEM Infrastructure Server (NIS) muss gebootet sein, damit Transaktionen gesendet und empfangen werden können. Bitte boote NIS mit Hilfe des NCC Boot-Menüpunkts.',
			601: 'Der NEM Infrastructure Server (NIS) ist bereits gebootet. Es ist nicht nötig, NIS ein weiteres Mal zu booten.',
			602: 'Fast fertig! NEM Infrastructure Server (NIS) lädt gerade die Blöcke. Die Brieftasche ist einsatzbereit, wenn alle Blöcke geladen sind.',
			699: 'Die maximale Anzahl an Harvestern, die auf diesem Server erlaubt ist, ist erreicht.',
			700: 'Das angegebene Konto erfüllt nicht die Grundkriterien, um Blöcke zu erzeugen. Um Blöcke erzeugen zu können, muss der zur Ernte verwendbare Anteil deines Kontostands mindestens 10.000 XEM betragen.',
			901: 'Es ist ein Fehler beim Übergang zum Offlinemodus aufgetreten.',
			1000: 'Der eingegebene private Schlüssel passt nicht zum eingegebenen öffentlichen Schlüssel.',
			1001: 'Der eingegebene öffentliche Schlüssel passt nicht zur eingegebenen Adresse.',
			1002: 'Die Adresse gehört nicht zum Hauptnetzwerk.',
			1203: 'Das angegebene Verfallsdatum liegt in der Vergangenheit. Das Verfallsdatum muss in einem Zeitraum von einem Tag liegen.',
			1204: 'Das angegebene Verfallsdatum liegt zu weit in der Zukunft. Das Verfallsdatum muss in einem Zeitraum von einem Tag liegen.',
			1205: 'Der Kontostand reicht nicht aus, um diese Transaktion durchzuführen.',
			1206: 'Die eingegebene Nachricht ist zu lang. Bitte reduziere die Länge der Nachricht, um sie versenden zu können.',
			1207: 'Der Transaktionshash existiert bereits in der Datenbank oder in der Liste der ausstehenden Transaktionen.',
			1208: 'Die Signatur der Transaktion konnte nicht verifiziert werden.',
			1209: 'Der Zeitstempel der Transaktion liegt zu weit in der Vergangenheit.',
			1210: 'Der Zeitstempel der Transaktion liegt zu weit in der Zukunft.',
			1219: 'Die Transaktion wurde abgelehnt, weil gerade zu viele Transaktionen gesendet werden. Eine höhere Gebühr erhöht die Chance, dass die Transaktion akzeptiert wird.',
			1262: 'Das Konto, welches für die delegierte Ernte benutzt werden soll, hat einen Kontostand größer als Null und kann daher nicht verwendet werden.',
			1263: 'Übertragung der Wichtigkeit abgelehnt, da es noch eine ausstehende Übertragung gibt.',
			1264: 'Die delegierte Ernte ist bereits freigeschaltet.',
			1265: 'Die delegierte Ernte ist bereits deaktiviert.',
			1266: 'Die Wichtigkeitsübertragung (für die delegierte Ernte) steht im Konflikt mit einer anderen Wichtigkeitsübertragung.',
			1271: 'Multisig-Signierung abgelehnt. Das aktuelle Konto ist kein Mitsignierer eines Multisig-Kontos.',
			1273: 'Multisig-Signierung abgelehnt. Die zu signierende Multisig-Transaktion existiert nicht.',
			1274: 'Diese Transaktion ist für ein Multisig-Konto nicht erlaubt.',
			1275: 'Änderung des Multisig-Kontos abgelehnt. Eines der hinzugefügten Konten ist schon Mitsignierer.',
			1321: 'Das Konto ist unbekannt. Ein Konto muss mindestens einmal als Absender oder Empfänger in einer Transaktion auftreten, um dem Netzwerk bekannt zu sein.',

		},
		common: {
			success: 'Erfolg',
			unknown: 'Unbekannter Status',
			unknownMessage: 'NCC hat keine Rückmeldung bekommen. Es ist unklar, ob die Transaktion gesendet wurde.<br /><br />Bitte prüfe, ob die Transaktion unter "Transaktionen" aufgelistet wird (Ausgehend oder Ausstehend) und sende sie nur dann noch mal, wenn sie dort nicht vorhanden ist.',
			appStatus: {
				nccUnknown: 'NCC-Status ist unbekannt',
				nccUnavailable: 'NCC ist nicht verfügbar',
				nccStarting: 'NCC wird gestartet...',
				nisUnknown: 'NIS-Status ist unbekannt',
				nisUnavailable: 'NIS ist nicht verfügbar',
				nisStarting: 'NIS wird gestartet...',
				notBooted: 'NIS muss gebootet werden. Bitte öffne eine Brieftasche und boote NIS mit Hilfe des Popup-Dialoges.',
				loading: 'Lade Blöcke aus der Datenbank, im Moment bei Block: ',
				booting: 'NIS wird gebootet...',
				nisInfoNotAvailable: 'NIS-Status wird abgefragt...',
				synchronizing: 'NIS synchronisiert gerade. Block {{1}}, {{2}} im Rückstand.',
				daysBehind: {
					0: 'weniger als 1 Tag',
					1: 'etwa 1 Tag',
					many: 'etwa {{1}} Tage'
				},
				synchronized: 'NIS ist synchron!',
				noRemoteNisAvailable: 'Kein Remote-NIS gefunden. Ist die Internetverbindung unterbrochen?'
			},
			addressBook: 'Adressbuch',
			password: 'Passwort',
			passwordValidation: 'Das Passwort darf nicht leer sein',
			address: 'Adresse',
			privateLabel: 'Eigene Bezeichnung',
			publicLabel: 'Öffentliche Bezeichnung',
			noCharge: 'Das Konto wird <b>NICHT</b> mit Gebühren belastet. Das Multisig-Konto zahlt die Gebühren.',
			fee: 'Gebühr',
			multisigFee: 'Signierungs-Gebühr',
			useMinimumFee: 'Benutze Mindestgebühr',
			feeValidation: 'Die Gebühr darf die Mindestgebühr nicht unterschreiten',
			justUse: 'Just use',
			dueBy: 'Verfällt in',
			minutes: 'minute(s)',
			hours: 'Stunde(n)',
			hoursDue: 'Verfällt in (Stunden)',
			hoursDueExplanation: 'Falls die Transaktion von der NEM Cloud nicht innerhalb der hier eingestellten Zeit akzeptiert wird, wird sie endgültig abgelehnt.',
			closeButton: 'Schließen',
			cancelButton: 'Abbrechen',
			sendButton: 'Senden',
			account: 'Adresse des Kontos',
			thisAccount: 'Dieses Konto',
			warning: 'Achtung',
			newBuild: 'NEW BUILD',
			newBuildNumber: 'There is new build {{1}} available for download. Check <a class="hyperlink--default", href="http://blog.nem.io">blog.nem.io</a> for details',

		},
		transactionTypes: {
			20: 'XEM-Überweisung',
			21: 'Wichtigkeitsübertragung',
			22: 'Multisig-Konto-Modifikation',
			23: 'PROVISION NAMESPACE',
			24: 'MOSAIC CREATION',
			25: 'MOSAIC SUPPLY',
			40: 'MULTISIG SIGNATURE',
			50: 'Multisig-Überweisung',
			51: 'Multisig-Überweisung',
			52: 'Multisig-Überweisung',
			53: 'Multisig-Überweisung',
			54: 'Multisig-Überweisung',
			55: 'Multisig-Überweisung',

		},
		transactionDirections: {
			pending: 'Ausstehende Transaktion',
			outgoing: 'Ausgehende Transaktion',
			incoming: 'Eingehende Transaktion',
			self: 'Transaktion zu sich selbst',
			importance: 'Wichtigkeitsübertragung',
			modification: 'Multisig-Konto-Modifikation',
			provision: 'Provision Namespace',
			mosaicCreation: 'Mosaic Creation',
			mosaicSupply: 'Mosaic Supply'
		},
		modals: {
			error: {
				title: 'Entschuldigung!',
				caption: 'FEHLER {{1}}'
			},
			yikes: {
				title: 'Achtung!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'Ja',
				no: 'Nein'
			},
			initialBackup: {
				title: "Willkommen bei NEM!",
				content: "Es wird empfohlen, ein Brieftaschen-Backup anzulegen. Dies ist über das Menü in der oberen, rechten Ecke möglich."
			},
			settings: {
				title: 'Einstellungen',
				language: {
					label: 'Sprache'
				},
				remoteServer: {
					tabTitle: 'Remote-Server',
					protocol: 'Protokoll',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Port',
					defaultPort: 'Standard-Port benutzen.'
				},
				autoBoot: {
					tabTitle: 'Auto-boot',
					name: 'Name des NIS',
					primaryAccount: 'Hauptkonto',
					auto: 'Automatisch booten beim Öffnen der Brieftasche'
				},
				save: 'Speichern',
				saveSuccess: 'Die Einstellungen wurden erfolgreich gespeichert'
			},
			signToken: {
				title: "Sign a token using account",
				label: "Token (url, string, anything)",
				signature: "Signed token",
				sign: "Sign"
			},
			multisig: {
				title: 'In Multisig-Konto umwandeln',
				multisigAccount: 'Multisig-Konto',
				cosignatories: 'Adressen der Mitsignierer',
				labelDesc: 'Die Bezeichnung des Kontos ist {{1}}',
				nullLabelDesc: 'Dieses Konto hat keine Bezeichnung',
				addCosignatory: '+ Mitsignierer hinzufügen',
				convert: 'Umwandeln',
				txConfirm: {
					title: 'Umwandlung in Multisig-Konto bestätigen',
					total: 'Insgesamt',

				},
				warning: 'Das Multisig-Konto ist selbst in der Liste der Mitsignierer. Das bedeutet, dass über das Vermögen auf diesem Konto nicht mehr verfügt werden kann. Es ist höchstwahrscheinlich, dass du das <b>NICHT</b> tun möchtest.',
				minCosignatoriesDefaultLabel: 'Use default cosignatories number',
				minCosignatoriesRelativeLabel: 'relative change',
				minCosignatoriesLabel: 'Minimum number of cosignatories',
				minCosignatoriesZero: 'Using zero would cause all cosignatories to be required',
				minCosignatoriesOverflow: 'Specified number is larger than number of cosignatories'
			},
			signMultisig: {
				title: 'Multisig-Transaktion signieren',
				original: {
					from: 'Multisig-Konto',
					to: 'Empfänger',
					amount: 'Betrag',
					fee: 'Gebühr',
					deadline: 'Frist'
				},
				multisigFees: 'Signierungs-Gebühr',
				multisigTotal: 'Insgesamt',
				sender: 'Mitsignierer',
				passwordValidation: 'Das Passwort darf nicht leer sein',
				sending: 'Sende...',
				txConfirm: {
					title: 'Multisig-Transaktion bestätigen',
					message: 'Nachricht',
					encrypted: 'Nachricht ist verschlüsselt',
					noMessage: 'Keine Nachricht',

				}
			},
			sendNem: {
				title: 'XEM senden',
				sender: 'Absender',
				thisAccount: 'Dieses Konto',
				labelDesc: 'Die Bezeichnung des Kontos ist {{1}}',
				nullLabelDesc: 'Dieses Konto hat keine Bezeichnung',
				amount: 'Betrag',
				recipient: 'Adresse oder Bezeichnung des Empfängerkontos',
				recipientValidation: 'Adressen müssen eine Länge von 40 Zeichen (ohne Bindestriche) haben',
				message: 'Nachricht',
				encrypt: 'Nachricht verschlüsseln',
				sending: 'Sende...',
				successMessage: 'Your transaction has been sent successfully! <br><br>Transaction hash: {{1}}',
				txConfirm: {
					title: 'Transaktion bestätigen',
					amount: 'Betrag',
					to: 'An',
					total: 'Insgesamt',
					message: 'Nachricht',
					encrypted: 'Nachricht ist verschlüsselt',
					noMessage: 'Keine Nachricht',
					confirm: 'Bestätigen',
					sending: 'Sende...'
				},
				notBootedWarning: {
					title: 'NIS wurde noch nicht gebootet!',
					message: 'NIS muss gebootet werden, bevor Transaktionen gesendet werden können!'
				},
				bootingWarning: {
					title: 'NIS wird gebootet',
					message: 'Bitte warte bis der Bootprozess abgeschlossen ist, bevor Du eine Transaktion sendest.'
				},
				loadingWarning: {
					title: 'Datenbank wird geladen'
				}
			},
			clientInfo: {
				title: 'Software Informationen',
				ncc: 'NEM Community Client (NCC)',
				signer: 'Unterzeichner:',
				remoteServer: 'Verbundener NIS:',
				local: 'Lokal',
				nis: 'NEM Infrastructure Server (NIS)',
				sync: 'Synchron',
				notSync: 'Nicht synchron',
				notConnected: 'Nicht verbunden mit der NEM Cloud',
				loading: 'Lade...'
			},
			mosaicDetails: 'Mosaic Details',
			transactionDetails: {
				title: 'Transaktionsdetails',
				id: 'ID',
				hash: 'Hash',
				type: 'Transaktionstyp',
				direction: 'Transaktionsrichtung',
				pending: 'Ausstehend',
				outgoing: 'Ausgehend',
				incoming: 'Eingehend',
				self: 'Selbst',
				sender: 'Absender',
				multisigAccount: 'Multisig-Konto',
				issuer: 'Initiator',
				recipient: 'Empfänger',
				remote: 'Remote',
				multisigMessage: 'Vorhandene Signaturen',
				message: 'Nachricht',
				noMessage: 'Keine Nachricht',
				encrypted: 'Nachricht ist verschlüsselt',
				time: 'Zeitpunkt',
				confirmations: 'Bestätigungen',
				confirmationsUnknown: 'Unbekannt',
				amount: 'Betrag',
				multiplier: 'Multiplier',
				innerFee: 'Gebühr',
				multisigFees: 'Signierungs-Gebühren',
				cosignatory: 'Mitsignierer',
				namespace: 'Namespace',
				rentalFee: 'Rental fee',
				mosaicName: 'Mosaic Name',
				mosaicQuantity: 'Mosaic quantity',
				mosaicLevy: 'Mosaic levy',
				description: 'Description',
				propertiesLabel: 'Properties',
				properties: {
					divisibility: 'Divisibility',
					initialSupply: 'Initial supply',
					supplyMutable: 'Is supply mutable',
					transferable: 'Is transferable'
				},
				supplyType: 'Supply type',
				supplyAmount: 'Supply amount',

			},
			accountDetails: {
				title: 'Kontodetails',
				label: 'Eigene Bezeichnung',
				noLabel: 'Keine Bezeichnung',
				add: 'Zum Adressbuch hinzufügen',
				remove: 'Vom Adressbuch entfernen',
				balance: 'Kontostand',
				vested: 'Für Ernte verwendbarer Anteil',
				importance: 'Wichtigkeit',
				publicKey: 'Öffentlicher Schlüssel',
				noPublicKey: 'Öffentlicher Schlüssel unbekannt',
				harvestedBlocks: 'Geerntete Böcke'
			},
			bootLocalNode: {
				title: 'NIS booten',
				account: 'Adresse des Kontos, mit dem NIS gebootet werden soll',
				noLabel: '<span class=\'null\'><Keine Bezeichnung></span>',
				wallet: 'Zugehörige Brieftasche',
				node: 'Name des NIS',
				boot: 'Booten',
				booting: 'Wird gebootet...',
				warning: 'Warnung',
				warningText: 'Du versucht NIS zu booten <u>{{2}}</u><br/><br/>Ein Remote-NIS kann jedoch nicht über NCC gebootet werden.',
				warningStatement: 'Du hast Auto-boot aktiviert und verwendest gerade einen Remote-NIS {{3}}.<br/><br/>Ein Remote-NIS kann jedoch nicht über NCC gebootet werden.',
				warningQuestion: 'Bist du sicher, dass du den NIS <u>{{3}}</u> mit dem privaten Schlüssel des Kontos {{1}} ({{2}} XEM) booten möchtest?<br><br>Dadurch wird der <span class="sublabelWarning">private Schlüssel</span> des Kontos an diesen NIS übertragen: <u>{{3}}</u>. Es wird empfohlen, NIS nur mit leeren Konten zu booten.'
			},
			closeWallet: {
				title: 'Brieftasche schließen',
				message: 'Bist Du sicher, dass Du die Brieftasche schließen und zurück zur Startseite wechseln möchtest?'
			},
			createAccount: {
				title: 'Neues Konto anlegen',
				label: 'Eigene Bezeichnung',
				wallet: 'Zugehörige Brieftasche',
				successMessage: 'Das Konto {{1}} {{#2}}({{2}}){{/2}} wurde angelegt!',
				create: 'Anlegen'
			},
			showPrivateKey: {
				title: 'PRIVATEN Schlüssel des Kontos anzeigen',
				message: 'Dies wird den privaten Schlüssel des Kontos anzeigen. Falls Schadsoftware (Viren, Trojaner etc.) auf dem System ist, könnte dies ein Sicherheitsrisiko darstellen. Trotzdem fortfahren?',
				publicKey: 'Öffentlicher Schlüssel',
				privateKey: 'Privater Schlüssel',
				show: 'Schlüssel anzeigen'
			},
			showRemotePrivateKey: {
				title: 'PRIVATEN Schlüssel des Kontos für die delegierte Ernte anzeigen',
				message: 'Dies wird den privaten Schlüssel des Kontos für die delegierte Ernte anzeigen. Falls Schadsoftware (Viren, Trojaner etc.) auf dem System ist, könnte dies ein Sicherheitsrisiko darstellen. Trotzdem fortfahren?',

			},
			addAccount: {
				title: 'Ein existierendes Konto hinzufügen',
				privateKey: 'Privater Schlüssel des Kontos',
				wallet: 'Zugehörige Brieftasche',
				successMessage: 'Das Konto {{1}} {{#2}}({{2}}){{/2}} wurde zur Brieftasche hinzugefügt!',
				add: 'Hinzufügen',
				label: 'Eigene Bezeichnung'
			},
			setPrimary: {
				title: 'Hauptkonto festlegen',
				account: 'Adresse des Kontos, welches das Hauptkonto werden soll',
				noLabel: '<span class=\'null\'><Keine Bezeichnung></span>',
				wallet: 'Zugehörige Brieftasche',
				successMessage: 'Das Konto {{1}} {{#2}}({{2}}){{/2}} wurde als Hauptkonto festgelegt!',
				set: 'Als Hauptkonto festlegen'
			},
			changeWalletName: {
				title: 'Namen der Brieftasche ändern',
				wallet: 'Aktueller Name der Brieftasche',
				newName: 'Neuer Name der Brieftasche',
				successMessage: 'Der Name der Brieftasche wurde erfolgreich von <em>{{1}}</em> in <em>{{2}}</em> geändert.',
				change: 'Ändern'
			},
			changeWalletPassword: {
				title: 'Passwort der Brieftasche ändern',
				wallet: 'Brieftasche',
				password: 'Aktuelles Passwort',
				newPassword: 'Neues Passwort',
				confirmPassword: 'Neues Passwort bestätigen',
				successMessage: 'Das Passwort der Brieftasche wurde erfolgreich geändert',
				change: 'Ändern',
				passwordNotMatchTitle: 'Fehler!',
				passwordNotMatchMessage: 'Passwort und Passwortbestätigung sind verschieden. Bitte gib das neue Passwort beide Male richtig ein.'
			},
			exportWalletLight: {
				title: 'Export for lightwallet',
				export: 'Export'
			},
			changeAccountLabel: {
				title: 'Bezeichnung des Kontos ändern',
				label: 'Neue Bezeichnung des Kontos',
				wallet: 'Zugehörige Brieftasche',
				successMessage: 'Das Konto {{1}} hat jetzt die Bezeichnung {{2}}',
				change: 'Ändern'
			},
			removeAccount: {
				title: 'Konto entfernen',
				label: 'Bezeichnung des Kontos',
				wallet: 'Zugehörige Brieftasche',
				warning: 'Stelle bitte sicher, dass das Konto leer ist, bevor du es entfernst. Ohne Backup des privaten Schlüssels ist der Betrag sonst unwiederbringlich verloren.',
				successMessage: 'Das Konto {{1}} {{#2}}({{2}}){{/2}} wurde entfernt!',
				remove: 'Entfernen'
			},
			nisUnavailable: {
				title: 'NIS nicht verfügbar',
				message: 'Nicht verbunden mit NEM Infrastructure Server (NIS), warte auf die Verbindung...'
			},
			shutdown: {
				title: 'Programm schließen',
				message: 'Bist Du sicher, dass Du den NEM Community Client schließen möchtest?'
			},
			activateDelegated: {
				title: 'Delegierte Ernte freischalten',
				wallet: 'Zugehörige Brieftasche',
				activate: 'Freischalten',
				warningText: 'Das Freischalten der delegierten Ernte dauert ca. 6 Stunden (360 Blöcke) und kostet eine Gebühr. Nachdem die delegierte Ernte freigeschaltet ist, wird sie nicht automatisch gestartet!',
				delegatedAccount: 'Delegated account public key',
				builtIn: 'built into the wallet',

			},
			deactivateDelegated: {
				title: 'Delegierte Ernte deaktivieren',
				wallet: 'Zugehörige Brieftasche',
				deactivate: 'Deaktivieren',
				warningText: 'Die Deaktivierung der delegierten Ernte dauert ca. 6 Stunden (360 Blöcke) und kostet eine Gebühr.'
			},
			startRemote: {
				title: 'Delegierte Ernte starten',
				wallet: 'Zugehörige Brieftasche',
				start: 'Starten'
			},
			stopRemote: {
				title: 'Delegierte Ernte beenden',
				wallet: 'Zugehörige Brieftasche',
				stop: 'Beenden'
			},
			logoutWarning: {
				leavePage: "Du verlässt deine Brieftasche. Bitte beachte, dass der Zugang zu deiner Brieftasche so nicht gesperrt wird und Unbefugte Zugriff erhalten könnten. Um dies zu verhindern, verlasse deine Brieftasche bitte über das Menü in der oberen, rechten Ecke (Brieftasche schließen), bevor du den Tab oder den Browser schließt."
			},
			addContact: {
				title: 'Kontakt hinzufügen',
				add: 'Hinzufügen'
			},
			editContact: {
				title: 'Kontakt bearbeiten',
				saveChanges: 'Änderungen speichern'
			},
			removeContact: {
				title: 'Kontakt entfernen',
				remove: 'Entfernen'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Die Brieftasche wurde erfolgreich importiert!',
			nav: {
				start: 'Erste Schritte',
				about: 'Über NEM',
				settings: 'Einstellungen'
			},
			main: {
				leftTitle: 'Neu bei <em>NEM</em>?',
				leftButton: 'Neue Brieftasche anlegen',
				walletNamePlh: 'Name Deiner Brieftasche',
				passwordPlh: 'Passwort wählen',
				confirmPasswordPlh: 'Passwort bestätigen',
				create: 'Anlegen',
				creating: 'Wird angelegt...',
				rightTitle: 'Bist Du schon ein <em>NEM</em>ber?',
				rightButton: 'Öffne Deine Brieftasche',
				openButton: 'Öffnen',
				walletsFound: '<strong>{{1}}</strong> <em>Brieftasche(n)</em> gefunden',
				copyright: 'Fotografie von <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC verschlüsselt Deine Brieftasche',
						description: '<em>Sicherheit</em> ist sehr wichtig, um den Raub von Münzen &amp; Anlagen zu verhindern.'
					},
					{
						title: 'Remote NEM Infrastructure Server',
						description: 'Wenn du einen remote NIS benutzt, muss die Blockchain nicht heruntergeladen/synchronisiert werden.',

					},
					{
						title: 'Delegierte Ernte',
						description: 'Mit der delegierten Ernte kannst du auf externen Servern ernten und musst deinen eigenen Computer nicht laufen lassen!',

					},
					{
						title: 'Multisig-Überweisungen',
						description: 'Schütze deine XEM und Anlagen durch Blockchain-basierte Multisig-Überweisungen.',

					},
					{
						title: 'Viele Sprachen verfügbar',
						description: 'NEM ist in vielen Sprachen verfügbar. Siehe "Einstellungen".'
					},
					{
						title: 'Fragen oder Feedback?',
						description: '<a href="http://forum.ournem.com">forum.ournem.com</a> | IRC: #ournem | Telegram-Gruppenchats',

					}
				]
			},
			about: {
				sections: [
					{
						title: 'Wie funktioniert NCC?',
						paragraphs: [
							'<strong>NCC</strong> ermöglicht Dir den Zugriff auf Anlagen und NEM genauso wie eine herkömmliche Brieftasche. Du kannst',
							'<strong>NCC</strong> braucht Zugang zu einem <strong>NIS</strong> Server, um zu funktionieren. Normalerweise wird der Server lokal betrieben (wird zusammen mit dem <strong>NCC</strong> installiert)',
							'Du kannst auch den Zugang zu einem Remote-<strong>NIS</strong> konfigurieren.'
						],
						listItems: [
							'mehrere Brieftaschen haben',
							'mehrere Konten in jeder Brieftasche haben'
						]
					},
					{
						title: 'Was ist &#42;NIS?',
						paragraphs: [
							'Diese Komponente ist dafür zuständig, die <strong>NEM</strong> Cloud am Leben zu halten.',
							'The more <strong>NIS</strong> there are in the network, the better the security.,',
							'<strong>NIS</strong> ist der Zugangspunkt zur <strong>NEM</strong> Cloud.'
						],
						legend: '<strong>&#42;NIS</strong> steht für <strong>NEM Infrastructure Server</strong>'
					}
				]
			},
			footer: {
				copyright: '© Copyright 2014-2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Ungefähr vor {{1}} Tagen',
			lastAccessJustNow: 'Gerade eben',
			lastAccessTooltip: 'Letzter Zugriff war {{1}}',
			primary: 'Hauptkonto',
			primaryShort: 'H',
			noLabel: '<Keine Bezeichnung>',
			copiedToClipboard: 'Die Adresse wurde in die Zwischenablage kopiert!',
			actions: {
				refreshInfo: 'Informationen aktualisieren',
				bootLocalNode: 'NIS booten',
				changeWalletName: 'Namen der Brieftasche ändern',
				changeWalletPassword: 'Passwort der Brieftasche ändern',
				mergeWallets: 'Brieftaschen zusammenführen',
				exportWallet: 'Brieftasche exportieren',
				exportWalletLight: 'Export for Lightwallet',
				createAccount: 'Neues Konto anlegen',
				createRealAccountData: 'Daten für ein echtes Konto erzeugen',
				verifyRealAccountData: 'Daten eines echten Kontos verifizieren',
				showPrivateKey: 'PRIVATEN Schlüssel des Kontos anzeigen',
				showRemotePrivateKey: 'PRIVATEN Schlüssel des Kontos für die delegierte Ernte anzeigen',
				viewDetails: 'Kontodetails anzeigen',
				addAccount: 'Existierendes Konto hinzufügen',
				changeAccountLabel: 'Bezeichnung des Kontos ändern',
				setPrimary: 'Als Hauptkonto festlegen',
				removeAccount: 'Konto entfernen',
				clientInfo: 'Software Informationen',
				closeWallet: 'Brieftasche schließen',
				closeProgram: 'Programm beenden',
				copyClipboard: 'Adresse in die Zwischenablage kopieren',
				copyDisabled: 'Das Kopieren einer Adresse in die Zwischenablage erfordert Adobe Flash',
				convertMultisig: 'Ein anderes Konto in Multisig-Konto konvertieren'
			},
			nav: [
				'Übersicht',
				'Nachrichten',
				'Adressbuch',
				'Transaktionen',
				'Geerntete Blöcke',
				'Börse',
				'Neuigkeiten',
				'Anwendungen',
				'Konten',
				'Einstellungen',
				'Programm beenden',
				'Namespaces & Mosaics'
			],
			bootNodeWarning: 'NIS muss gebootet werden, bevor du alle NCC Features verwenden kannst.'
		},
		dashboard: {
			assets: {
				title: 'Your Mosaics'
			},
			importance: {
				title: 'Wichtigkeit',
				unknown: 'Unbekannter Status',
				start: 'Ernte starten',
				harvesting: 'Es wird geerntet',
				stop: 'Ernte beenden',
				description: 'Wichtigkeit des Kontos für die NEM Cloud',
				remoteHarvest: {
					title: 'Delegierte Ernte',
					activate: 'Delegierte Ernte freischalten',
					activating: 'Delegierte Ernte wird freigeschaltet...',
					active: 'Delegierte Ernte ist freigeschaltet',
					deactivate: 'Delegierte Ernte deaktivieren',
					deactivating: 'Delegierte Ernte wird deaktiviert...',
					startRemoteHarvesting: 'Delegierte Ernte starten',
					remotelyHarvesting: 'Delegierte Ernte',
					stopRemoteHarvesting: 'Delegierte Ernte beenden',
					multisigInfo: 'Activation or deactivation of a delegated harvesting for a multisig account must be done from one of cosignatory accounts',

				}
			},
			transactions: {
				title: 'Letzte Transaktionen',
				sendNem: 'XEM senden',
				signMultisig: 'Signieren',
				balance: 'Kontostand',
				loading: 'Lade Kontostand...',
				accountCosignatories: 'Multisig-Konto',
				accountCosignatoriesView: 'Mitsignierer anzeigen',
				vestedBalance: 'Für Ernte verwendbarer Anteil',
				syncStatus: '(Block {{1}}{{#2}} : etwa {{3}} Tage im Rückstand{{/2}})',
				notSynced: 'könnte falsch sein, NIS ist nicht synchron',
				unknown: 'unbekannt',
				columns: [
					'',
					'Zeitpunkt',
					'Absender/Empfänger',
					'Nachricht',
					'',
					'Details',
					'Bestätigungen',
					'Gebühr',
					'Betrag'
				],
				noMessage: 'Keine Nachricht',
				encrypted: 'Nachricht ist verschlüsselt',
				view: 'Ansehen',
				confirmationsUnknown: 'Unbekannt',
				pending: 'Ausstehend',
				seeAll: 'Alle Transaktionen ansehen',
				noTransactions: 'Es wurden noch keine Transaktionen ausgeführt'
			},
			nemValue: {
				title: 'XEM Statistiken'
			},
			messages: {
				titleTooltip: 'Nachrichten'
			},
			news: {
				titleTooltip: 'Neuigkeiten'
			},
			notAvailable: 'Noch nicht verfügbar im Beta Release'
		},
		transactions: {
			title: 'Transaktionen',
			sendNem: 'XEM senden',
			balance: 'Kontostand',
			filters: {
				confirmed: 'Bestätigt',
				unconfirmed: 'Ausstehend',
				incoming: 'Eingehend',
				outgoing: 'Ausgehend'
			},
			table: {
				columns: [
					'',
					'Zeitpunkt',
					'Absender/Empfänger',
					'Nachricht',
					'',
					'Details',
					'Bestätigungen',
					'Gebühr',
					'Betrag'
				],
				noMessage: 'Keine Nachricht',
				encrypted: 'Nachricht ist verschlüsselt',
				view: 'Ansehen',
				confirmationsUnknown: 'Unbekannt',
				pending: 'Ausstehend',
				noTransactions: 'Es wurden noch keine Transaktionen ausgeführt',
				loading: 'Lade weitere Transaktionen...'
			}
		},
		namespacesmosaics: {
			title: 'Namespaces & Mosaics',
			newNamespace: 'New Namespace',
			newMosaic: 'New Mosaic',
			balance: 'Kontostand',
			filters: {
				displayAll: 'Display all',
				displayMineonly: 'Display mine only',
				filterNamespace: 'Filter Namespace:',
				filterMosaic: 'Filter Mosaic:'
			},
			table: {
				columns: [
					'Owner',
					'Namespace & Mosaic',
					'Creation',
					'Expiration (est.)'
				],
				loading: 'Loading Namespaces & Mosaics...',
				subNamespace: 'sub-namespace'
			}
		},
		harvestedBlocks: {
			title: 'Geerntete Blöcke',
			feeEarned: 'Aus den letzten 25 geernteten Blöcken erhaltene Gebühren',
			unknown: 'Unbekannt',
			table: {
				columns: [
					'Block',
					'Zeitpunkt',
					'Schwierigkeitsgrad',
					'Gebühr'
				],
				noBlocks: 'Noch keine Blöcke geerntet',
				loading: 'Lade weitere geerntete Blöcke...'
			},
			harvesting: {
				unknown: 'Unbekannter Status',
				start: 'Ernte starten',
				harvesting: 'Ernte',
				stop: 'Ernte beenden',
				remoteHarvest: {
					startRemoteHarvesting: 'Delegierte Ernte starten',
					stopRemoteHarvesting: 'Delegierte Ernte beenden'
				}
			}
		},
		addressBook: {
			title: 'Adressbuch',
			addContact: 'Kontakt hinzufügen',
			table: {
				columns: [
					'Adresse des Kontakts',
					'Eigene Bezeichnung',
					'Öffentliche Bezeichnung'
				],
				noContacts: 'Keine Kontakte im Adressbuch vorhanden'
			},
			noLabel: 'Keine Bezeichnung',
			sendNem: 'XEM senden',
			edit: 'Bearbeiten',
			remove: 'Entfernen'
		},
		settings: {
			title: 'Einstellungen',
			settings: [
				{
					name: 'Sprache'
				}
			],
			save: 'Änderungen speichern',
			saveSuccess: 'Die Änderungen wurden erfolgreich gespeichert'
		}
	}
});
