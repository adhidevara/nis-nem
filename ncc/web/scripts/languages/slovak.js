define({
	id: "SK",
	name: "Slovenský",
	texts: {
		preferences: {
			thousandSeparator: "\u2009",
			decimalSeparator: "."
		},
		faults: {
			101: "Súbor sa nenašiel.",
			102: "Peňaženka nebola vytvorená",
			103: "Súbor peňaženky je poškodený. Prosím, obnovte súbor zo zálohy, ktorú ste mali urobiť pri jej vytváraní alebo pri pridaní konta.",
			104: "Poskytnuté heslo nie je správne. Dúfame, že správne heslo máte. Stratené heslo sa totiž nedá obnoviť",
			105: "No password was provided for the wallet.",
			106: "Pred použitím peňaženky ju musíte odomknúť. Na uistenie, že ste oprávnený používať peňaženku, je potrebné poskytnúť heslo.",
			107: "Peňaženka neobsahuje daný účet",
			108: "Účet nie je možné odstrániť. Pravdepodobne obsahuje zostatok väčší ako 0 NEMov alebo je konto, ktoré chcete odstrániť, hlavné.",
			109: "Iná peňaženka s rovnakým názvom už existuje. Prosím, vyberte iný názov.",
			110: "Peňaženka už daný účet obsahuje.",
			111: "The wallet name is a directory.",
			112: "The extension of the wallet file is incorrect.",
			113: "The wallet could not be deleted.",
			121: "The address book file does not exist.",
			122: "Address book has not been created.",
			123: "Address book file is corrupt. Please recover your address book from a backup.",
			124: "The provided password for the address book is not correct.",
			125: "No password was provided for the address book.",
			127: "Address book does not contain this address.",
			128: "The address provided is not valid.",
			129: "Another address book with the same name exists already. Please choose an other address book name.",
			130: "Address book already contains this address.",
			131: "The address book name is a directory.",
			132: "The extension of the address book file is incorrect.",
			133: "The address book could not be deleted.",
			202: "Šifrovanú správu nie je možné doručiť, pretože príjemca ešte neuskutočnil žiadny prevod",
			203: 'The account cannot be converted because not all cosignatories are known. They either need to be in the same wallet or have made at least one transaction.',
			305: 'The NEM Infrastructure Server (NIS) is not available.\n\nTry to restart the NEM software.\n\nIf you are using a remote NIS, check your configured host for typing errors or use another remote NIS.',
			306: "Vyskytla sa neočakávaná chyba. Ľutujeme, opätovný pokus by mohol pomôcť. V prípade, že sa problém nevyriešil, obráťte sa s ním na NEM NIS/NCC komunitu.",
			400: "Niektorá hodnota chýba alebo je neplatná.",
			401: "This operation cannot be completed because it might leak a private key by sending it to a remote NIS.",
			404: "Požadovaný zdroj nebol nájdený.",
			500: "Uloženie konfiguračného súboru zlyhalo.",
			600: "Na posielanie a prijímanie prevodov potrebuje NCC server NIS. Ten sa musí nabútovať z cloudu NEM. Prosím, použite vstupné menu NCC na bútovanie lokálneho uzla.",
			601: "Tento uzol je už nabútovaný. Ďalší pokus bútovať NIS nieje možný.",
			602: 'Almost ready. NEM Infrastructure Server is currently loading blocks. Wallet will be functional when db is fully loaded.',
			699: "Maximum number of harvesters allowed on server has been reached.",
			700: "Daný účet nespĺňa základné kritériá na začatie žatvy. Vačšinou sa tento problém vzťahuje na nedostatočné množstvo NEMov na účte. Žatva začína s minimálnou hodnotou 10000 vested NEM.",
			901: "Pri nastavovaní offline módu sa vyskytla chyba.",
			1000: "The private key and the public key you have provided mismatch.",
			1001: "The public key and the address you have provided mismatch.",
			1002: "The address does not belong to the main network.",
			1203: "Zadaný konečný termín sa nachádza v minulosti. Konečný termín musí byť zadaný do obdobia 1 deň.",
			1204: "Zadaný konečný termín sa nachádza v príliš ďalekej budúcnosti. Konečný termín musí byť zadaný do obdobia 1 deň.",
			1205: 'Your account does not have the right balance to make this transaction.',
			1206: "Množstvo textu vašej správy prevyšuje limit správ posielaných cez NEM. Prosím, pokúste sa znížiť množstvo textu v správe, ktorú chcete odoslať.",
			1207: "Hash prevodu už existuje v databáze alebo v zozname nepotvrdených prevodov.",
			1208: "Podpis prevodu nemôže byť overený.",
			1209: "Časový údaj prevodu sa nachádza v príliš ďalekej minulosti.",
			1210: "Časový údaj prevodu sa nachádza v príliš ďalekej budúcnosti.",
			1219: "The transaction was rejected because the transaction cache is too full. A higher fee improves the chance that the transaction gets accepted.",
			1262: 'Delegated harvesting account has non zero balance and cannot be used.',
			1263: "Importance transfer rejected. There is already pending importance transfer operation.",
			1264: 'Delegated harvesting is already active.',
			1265: 'Delegated harvesting is NOT active. Cannot deactivate.',
			1266: 'Importance transfer transaction (delegated harvesting) conflicts with existing transaction.',
			1271: "Multisig signature transaction rejected. Current account is not a cosignatory of a multisig account.",
			1273: "Multisig signature transaction rejected. Associated multisig transaction is not known to NEM network",
			1274: "Transaction is not allowed for multisig account.",
			1275: "Multisig account modification rejected. One of added accounts is already a cosignatory.",
			1321: "Účet je neznámy. Účet musí byť súčasťou aspoň jedného prevodu (odosielateľ alebo príjemca), aby mohol byť rozpoznaný sieťou.",

		},
		common: {
			success: "Úspech",
			unknown: "Neznámy status",
			unknownMessage: 'Ncc did not get response in a timely manner. Transaction might have been sent to the network.<br /><br />Please, check transactions before attempting to make it again.',
			appStatus: {
				nccUnknown: "NCC status is unknown",
				nccUnavailable: "NCC is not available",
				nccStarting: "NCC is starting...",
				nisUnknown: "NIS status is unknown",
				nisUnavailable: "NIS is not available",
				nisStarting: "NIS is starting...",
				notBooted: "NIS needs to be booted. Please open your wallet and boot a local node via the popup dialog or configure the auto-boot setting.",
				loading: "Loading blocks from db, at block: ",
				booting: "Booting NIS...",
				nisInfoNotAvailable: "NIS info is not available yet. Trying to retrieve NIS info...",
				synchronizing: "NIS is synchronizing. At block {{1}}, est. {{2}} behind.",
				daysBehind: {
					0: "less than 1 day",
					1: "1 day",
					many: "{{1}} days"
				},
				synchronized: "NIS is synchronized!",
				noRemoteNisAvailable: "No remote NIS found in the network, disconnected from internet?"
			},
			addressBook: "Address book",
			password: "Password",
			passwordValidation: "Password must not be blank",
			address: "Address",
			privateLabel: "Private label",
			publicLabel: "Public label",
			noCharge: "Current account will <b>NOT</b> be charged any fees, multisig account covers them",
			fee: "Poplatok",
			multisigFee: "Multisig fee",
			useMinimumFee: "Use minimum fee",
			feeValidation: "Fee must not be less than the minimum fee",
			justUse: "Just use",
			dueBy: "Due by",
			minutes: 'minute(s)',
			hours: "hour(s)",
			hoursDue: "Due by (hours)",
			hoursDueExplanation: 'If the transaction isn\'t included by the deadline, it is rejected.',
			closeButton: 'Close',
			cancelButton: "Cancel",
			sendButton: "Poslať",
			account: "Account",
			thisAccount: "This account",
			warning: 'Warning',
			newBuild: 'NEW BUILD',
			newBuildNumber: 'There is new build {{1}} available for download. Check <a class="hyperlink--default", href="http://blog.nem.io">blog.nem.io</a> for details',

		},
		transactionTypes: {
			20: "TRANSFER TRANSACTION",
			21: "IMPORTANCE TRANSFER",
			22: "MODIFICATION OF MULTISIG ACCOUNT",
			23: 'PROVISION NAMESPACE',
			24: 'MOSAIC CREATION',
			25: 'MOSAIC SUPPLY',
			40: 'MULTISIG SIGNATURE',
			50: "MULTISIG TRANSACTION",
			51: "MULTISIG TRANSACTION",
			52: "MULTISIG TRANSACTION",
			53: "MULTISIG TRANSACTION",
			54: "MULTISIG TRANSACTION",
			55: "MULTISIG TRANSACTION",

		},
		transactionDirections: {
			pending: "Pending transaction",
			outgoing: "Outgoing transaction",
			incoming: "Incoming transaction",
			self: "Self transaction",
			importance: "Importance transaction",
			modification: "Aggregate Modification of Multisig",
			provision: 'Provision Namespace',
			mosaicCreation: 'Mosaic Creation',
			mosaicSupply: 'Mosaic Supply'
		},
		modals: {
			error: {
				title: "Oops!",
				caption: "CHYBA {{1}}"
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: "Áno",
				no: "Nie"
			},
			initialBackup: {
				title: "Welcome to NEM",
				content: "You can create wallet backup from menu in upper right corner."
			},
			settings: {
				title: "Settings",
				language: {
					label: "Language"
				},
				remoteServer: {
					tabTitle: "Remote Server",
					protocol: "Protocol",
					protocolOptions: {
						http: "HTTP"
					},
					host: "Host",
					port: "Port",
					defaultPort: 'Use default port.'
				},
				autoBoot: {
					tabTitle: "Auto-boot",
					name: "Node name",
					primaryAccount: "Primary account",
					auto: "Auto boot when a wallet is opened"
				},
				save: "Save",
				saveSuccess: "Settings have been saved successfully"
			},
			signToken: {
				title: "Sign a token using account",
				label: "Token (url, string, anything)",
				signature: "Signed token",
				sign: "Sign"
			},
			multisig: {
				title: "Convert account to multisig",
				multisigAccount: "Multisig account",
				cosignatories: "Cosignatories' addresses",
				labelDesc: "This account is labeled as {{1}}",
				nullLabelDesc: "This account doesn't have a label",
				addCosignatory: "+ Add Cosignatory",
				convert: "Convert",
				txConfirm: {
					title: "Confirm Conversion to Multisig Account",
					total: "Total",

				},
				warning: 'Multisig account is on the list of cosignatories. This will result in locking down the account cutting off access to the fund. Most likely you <b>DO NOT</b> want to do that.',
				minCosignatoriesDefaultLabel: 'Use default cosignatories number',
				minCosignatoriesRelativeLabel: 'relative change',
				minCosignatoriesLabel: 'Minimum number of cosignatories',
				minCosignatoriesZero: 'Using zero would cause all cosignatories to be required',
				minCosignatoriesOverflow: 'Specified number is larger than number of cosignatories'
			},
			signMultisig: {
				title: "Sign multisig transaction",
				original: {
					from: "Multisig account",
					to: "Recipient",
					amount: "Amount",
					fee: "Inner Fee",
					deadline: "Deadline"
				},
				multisigFees: "Multisig Fees",
				multisigTotal: "Total",
				sender: "Cosignatory",
				passwordValidation: "Password must not be blank",
				sending: "Sending...",
				txConfirm: {
					title: "Confirm Multisig Transaction",
					message: "Message",
					encrypted: "Message is encrypted",
					noMessage: "No message",

				}
			},
			sendNem: {
				title: "Poslať NEM",
				sender: "Sender",
				thisAccount: "This account",
				labelDesc: "Názov tohto účtu je <strong>{{1}}</strong>",
				nullLabelDesc: "Tento účet nemá názov",
				amount: "Množstvo",
				recipient: "Účet príjemcu",
				recipientValidation: "Account addresses must be 40 characters long excluding dashes",
				message: "Správa",
				encrypt: "Šifrovaná správa",
				sending: "Posielanie...",
				successMessage: 'Your transaction has been sent successfully! <br><br>Transaction hash: {{1}}',
				txConfirm: {
					title: "Confirm Transaction",
					amount: "Amount",
					to: "To",
					total: "Total",
					message: "Message",
					encrypted: "Message is encrypted",
					noMessage: "No message",
					confirm: "Confirm",
					sending: "Sending..."
				},
				notBootedWarning: {
					title: "Node has not been booted!",
					message: "A local node needs to be booted before you can send NEM!"
				},
				bootingWarning: {
					title: "Node is being booted",
					message: "Please wait until booting process is done to send your transaction."
				},
				loadingWarning: {
					title: "Loading db"
				}
			},
			clientInfo: {
				title: "Client info",
				ncc: "NEM Community Client - NCC",
				signer: "Signatár",
				remoteServer: "Vzdialený server",
				local: "Lokálny",
				nis: "NEM Infrastructure Server - NIS",
				sync: "Synchronizovaný",
				notSync: "Nesynchronizovaný",
				notConnected: "Nepripojený ku Cloudu NEM",
				loading: "Načítava sa..."
			},
			mosaicDetails: 'Mosaic Details',
			transactionDetails: {
				title: "Detaily prevodu",
				id: "ID",
				hash: "Hash",
				type: "Typ prevodu",
				direction: "Transaction Direction",
				pending: "Prebieha",
				outgoing: "Odchádza",
				incoming: "Prichádza",
				self: "Ja",
				sender: "Odosielateľ",
				multisigAccount: "Multisig Account",
				issuer: "Issuer",
				recipient: "Príjemca",
				remote: "Remote",
				multisigMessage: "Signatures present",
				message: "Správa",
				noMessage: "Bez správy",
				encrypted: "Správa je šifrovaná",
				time: "Časový údaj",
				confirmations: "Potvrdenia",
				confirmationsUnknown: "Unknown",
				amount: "Množstvo",
				multiplier: 'Multiplier',
				innerFee: "Inner Fee",
				multisigFees: "Multisig Fees",
				cosignatory: "Cosignatory",
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
				title: "Account details",
				label: "Label",
				noLabel: "No label",
				add: "Add to address book",
				remove: "Remove from address book",
				balance: "Balance",
				vested: "vested",
				importance: "Importance",
				publicKey: "Public key",
				noPublicKey: "No public key",
				harvestedBlocks: "Harvested blocks"
			},
			bootLocalNode: {
				title: "Bútovať lokálny uzol",
				account: "Účet na bútovanie lokálneho uzla",
				noLabel: "<span class=\"null\">&lt;Žiadny názov&gt;</span>",
				wallet: "Peňaženka",
				node: "Názov uzla",
				boot: "Bútovať",
				booting: "Bútovanie...",
				warning: 'Boot node warning',
				warningText: 'You\'re trying to boot a node <u>{{2}}</u><br/><br/>Booting remote node is currently impossible from within NCC.',
				warningStatement: 'You have auto-boot set to true and you\'re using remote node {{3}}.<br/><br/>Booting remote node is currently impossible from within NCC',
				warningQuestion: 'Are you sure you want to boot node <u>{{3}}</u> using private key of account {{1}} ({{2}} XEM)?<br><br>This will reveal this account\'s <span class="sublabelWarning">private key</span> to node: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: "Zatvoriť peňaženku",
				message: "Naozaj chcete zatvoriť peňaženku a vrátiť sa na úvodnú stranu?"
			},
			createAccount: {
				title: "Vytvoriť nový účet",
				label: "Súkromný názov",
				wallet: "Peňaženka",
				successMessage: "Účet {{1}} {{#2}}({{2}}){{/2}} bol vytvorený!",
				create: "Vytvoriť"
			},
			showPrivateKey: {
				title: 'Show Account\'s PRIVATE Key',
				message: 'This will display account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',
				publicKey: "Public key",
				privateKey: "Private key",
				show: 'Show the key'
			},
			showRemotePrivateKey: {
				title: 'Show Remote Account\'s PRIVATE Key',
				message: 'This will display remote account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',

			},
			addAccount: {
				title: "Pridať už existujúci účet",
				privateKey: "Súkromný kľúč k účtu",
				wallet: "Peňaženka",
				successMessage: "Účet {{1}} {{#2}}({{2}}){{/2}} bol pridaný!",
				add: "Pridať",
				label: "Názov"
			},
			setPrimary: {
				title: "Vybrať hlavný účet",
				account: "Vybrať účet ako hlavný",
				noLabel: "<span class=\"null\">&lt;Žiadny názov&gt;</span>",
				wallet: "Peňaženka",
				successMessage: "Účet {{1}} {{#2}}({{2}}){{/2}} bol nastavený ako hlavný!",
				set: "Nastaviť ako hlavný"
			},
			changeWalletName: {
				title: "Zmena názvu peňaženky",
				wallet: "Súčasný názov peňaženky",
				newName: "Nový názov peňaženky",
				successMessage: "Názov peňaženky bol úspešne zmenený z <em>{{1}}</em> na <em>{{2}}</em>",
				change: "Zmeniť"
			},
			changeWalletPassword: {
				title: "Zmena hesla peňaženky",
				wallet: "Peňaženka",
				password: "Súčasné heslo",
				newPassword: "Nové heslo",
				confirmPassword: "Potvrdiť nové heslo",
				successMessage: "Heslo peňaženky bolo úspešne zmenené",
				change: "Zmeniť",
				passwordNotMatchTitle: "Oops!",
				passwordNotMatchMessage: "Zadané heslo a heslo potvrdenia sa nezhodujú. Prosím, uistite sa, že ste nové heslo napísali správne."
			},
			exportWalletLight: {
				title: 'Export for lightwallet',
				export: 'Export'
			},
			changeAccountLabel: {
				title: "Zmeniť názov účtu ",
				label: "Názov účtu",
				wallet: "Peňaženka",
				successMessage: "Účet {{1}} sa teraz volá {{2}}",
				change: "Zmeniť"
			},
			removeAccount: {
				title: "Odstrániť účet",
				label: "Názov účtu",
				wallet: "Peňaženka",
				warning: "Prosím, uistite sa, že na vašom účte už nie sú žiadne NEMy, inak budú stratené navždy.",
				successMessage: "Účet {{1}} {{#2}}({{2}}){{/2}} bol odstránený!",
				remove: "Odstrániť"
			},
			nisUnavailable: {
				title: "NIS nedostupný",
				message: "Odpojený z NIS, čaká na spojenie"
			},
			shutdown: {
				title: "Zatvoriť program",
				message: "Naozaj chcete zatvoriť NEM Community Client?"
			},
			activateDelegated: {
				title: 'Activate Delegated Harvesting',
				wallet: "Wallet",
				activate: "Activate",
				warningText: 'Activation will take 6 hours (360 blocks). Activation will NOT start harvesting automatically.',
				delegatedAccount: 'Delegated account public key',
				builtIn: 'built into the wallet',

			},
			deactivateDelegated: {
				title: 'Deactivate Delegated Harvesting',
				wallet: "Wallet",
				deactivate: "Deactivate",
				warningText: 'Deactivation will take 6 hours (360 blocks).'
			},
			startRemote: {
				title: 'Start Delegated Harvesting',
				wallet: "Wallet",
				start: "Start"
			},
			stopRemote: {
				title: 'Stop Delegated Harvesting',
				wallet: "Wallet",
				stop: "Stop"
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer. To prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away."
			},
			addContact: {
				title: "Add contact",
				add: "Add"
			},
			editContact: {
				title: "Edit contact",
				saveChanges: "Save changes"
			},
			removeContact: {
				title: "Remove contact",
				remove: "Remove"
			}
		},
		landing: {
			logo: "images/nem_logo.png",
			importSuccess: "Peňaženka bola úspešne importovaná!",
			nav: {
				start: "Prvé <strong>kroky</strong>",
				about: "Info o <strong>NEM</strong>",
				settings: "Settings"
			},
			main: {
				leftTitle: "Nový v <em>NEM</em>?",
				leftButton: "Vytvoriť novú peňaženku",
				walletNamePlh: "Názov vašej peňaženky",
				passwordPlh: "Heslo",
				confirmPasswordPlh: "Confirm password",
				create: "Vytvoriť",
				creating: "Creating...",
				rightTitle: "Už ste <em>NEM</em>ber?",
				rightButton: "Otvoriť vašu peňaženku",
				openButton: "Otvoriť",
				walletsFound: "Nájdené<strong>{{1}}</strong> <em>peňaženky</em>",
				copyright: "Photography by <em>Cas Cornelissen</em>"
			},
			carousel: {
				items: [
					{
						title: "NCC šifruje vašu peňaženku",
						description: "<em>Bezpečnosť</em> je veľmi dôležitá, vyhnete sa tak krádeži vašich NEMov &amp; aktív."
					},
					{
						title: 'Remote NEM Infrastructure Server',
						description: 'By using a remote NIS you don\'t have to synchronise the blockchain at start-up.',

					},
					{
						title: 'Delegated harvesting',
						description: 'With delegated harvesting you can harvest on remote NIS nodes!',

					},
					{
						title: 'Multisignature transactions',
						description: 'Secure your XEM and assets via in-blockchain multi-signature transactions.',

					},
					{
						title: 'Native language support',
						description: 'NEM user interface supports multiple languages. See "Settings".'
					},
					{
						title: 'Got any questions or feedback ?',
						description: '<a href="http://forum.ournem.com">forum.ournem.com</a> | #ournem on freenode.org | Telegram',

					}
				]
			},
			about: {
				sections: [
					{
						title: "Ako NCC funguje?",
						paragraphs: [
							"<strong>NCC</strong> poskytuje prístup k vašim aktívam a NEMom tak ako klasická peňaženka. Môžete",
							"<strong>NCC</strong> potrebuje prístup k serveru<strong>NIS</strong>. Za normálnych okolností máte aktívny lokálny server (je nainštalovaný spolu s <strong>NCC</strong>)",
							"Môžete nakonfigurovať aj prístup k vzdialenému serveru <strong>NIS</strong>."
						],
						listItems: [
							"Mať viacero peňaženiek",
							"Nastaviť peňaženku tak, aby obsahovala viacero účtov"
						]
					},
					{
						title: "Čo je &#42;NIS?",
						paragraphs: [
							"Táto súčasť je zodpovedná za udržiavanie cloudu <strong>NEM</strong> živého.",
							'The more <strong>NIS</strong> there are in the network, the better the security.,',
							"<strong>NIS</strong> je prístupová brána do <strong>NEM</strong> cloudu."
						],
						legend: "<strong>&#42;NIS</strong> je skratka <strong>NEM Infrastructure Server</strong>"
					}
				]
			},
			footer: {
				copyright: "&copy; Copyright 2014. NEM Community Client."
			}
		},
		wallet: {
			logo: "images/nem_logo.png",
			lastAccess: "Asi pred {{1}} dňami",
			lastAccessJustNow: "Práve teraz",
			lastAccessTooltip: "Posledné prihlásenie {{1}}",
			primary: "Hlavný",
			primaryShort: "H",
			noLabel: "<Žiadny názov>",
			copiedToClipboard: "Adresa bola skopírovaná!",
			actions: {
				refreshInfo: "Obnoviť Info",
				bootLocalNode: "Bútovať lokálny uzol",
				changeWalletName: "Zmeniť názov peňaženky",
				changeWalletPassword: "Zmeniť heslo peňaženky",
				mergeWallets: "Zlúčiť peňaženky",
				exportWallet: "Exportovať peňaženku",
				exportWalletLight: 'Export for Lightwallet',
				createAccount: "Vytvoriť nový účet",
				createRealAccountData: "Create Real Account Data",
				verifyRealAccountData: "Verify Real Account Data",
				showPrivateKey: 'Show Account\'s PRIVATE key',
				showRemotePrivateKey: 'Show Remote Account\'s PRIVATE key',
				viewDetails: 'View Account Details',
				addAccount: "Pridať už existujúci účet",
				changeAccountLabel: "Zmeniť názov účtu",
				setPrimary: "Nastaviť ako hlavný účet",
				removeAccount: "Odstrániť účet",
				clientInfo: "Client Info",
				closeWallet: "Zatvoriť peňaženku",
				closeProgram: "Zatvoriť program",
				copyClipboard: "Copy Address to Clipboard",
				copyDisabled: 'Copying an address requires flash',
				convertMultisig: 'Convert other account to multisig'
			},
			nav: [
				"Nástenka",
				"Správy",
				"Kontakty",
				"Prevody",
				"Zožaté bloky",
				"Burza aktív",
				"Novinky",
				"Aplikácie",
				"Účty",
				"Nastavenia",
				"Zatvoriť program",
				'Namespaces & Mosaics'
			],
			bootNodeWarning: "Ak chcete naplno využívať možnosti NCC, musíte najprv nabútovať lokálny uzol."
		},
		dashboard: {
			assets: {
				title: 'Your Mosaics'
			},
			importance: {
				title: "Významové skóre",
				unknown: "Neznámy status",
				start: "Začať žatvu",
				harvesting: "Žatva",
				stop: "Zastaviť žatvu",
				description: "Význam účtu pre cloud NEMu",
				remoteHarvest: {
					title: 'Delegated harvesting',
					activate: 'Activate delegated harvesting',
					activating: 'Activating delegated harvesting...',
					active: 'Delegated harvesting is active',
					deactivate: 'Deactivate delegated harvesting',
					deactivating: 'Deactivating delegated harvesting...',
					startRemoteHarvesting: 'Start delegated harvesting',
					remotelyHarvesting: "Remotely harvesting",
					stopRemoteHarvesting: 'Stop delegated harvesting',
					multisigInfo: 'Activation or deactivation of a delegated harvesting for a multisig account must be done from one of cosignatory accounts',

				}
			},
			transactions: {
				title: "Nedávne prevody",
				sendNem: "Poslať NEM",
				signMultisig: "SIGN",
				balance: "Súčasný zostatok",
				loading: 'Loading balance',
				accountCosignatories: "Multisig account",
				accountCosignatoriesView: 'view cosignatories',
				vestedBalance: "Vested Balance",
				syncStatus: "(Blok {{1}}{{#2}} : asi {{3}} dni pozadu{{/2}})",
				notSynced: 'might be inaccurate, NIS not synchronized yet',
				unknown: "Neznámy",
				columns: [
					"",
					"Čas",
					"Odosielateľ/Príjemca",
					"Správa",
					"",
					"Detaily",
					"Potvrdenia",
					"Poplatok",
					"Množstvo"
				],
				noMessage: "Žiadna správa",
				encrypted: "Správa je šifrovaná",
				view: "Pozrieť",
				confirmationsUnknown: "Unknown",
				pending: "Prebieha",
				seeAll: "Vidieť všetky prevody",
				noTransactions: "Zatiaľ neboli vykonané žiadne prevody"
			},
			nemValue: {
				title: "Štatistiky hodnoty NEM"
			},
			messages: {
				titleTooltip: "Správy"
			},
			news: {
				titleTooltip: "Novinky"
			},
			notAvailable: "V alfa verzii nie je dostupné"
		},
		transactions: {
			title: "Prevody",
			sendNem: "Poslať NEM",
			balance: "Súčasný zostatok",
			filters: {
				confirmed: "Confirmed",
				unconfirmed: "Unconfirmed",
				incoming: "Prichádza",
				outgoing: "Odchádza"
			},
			table: {
				columns: [
					"",
					"Čas",
					"Odosielateľ/Príjemca",
					"Správa",
					"",
					"Detaily",
					"Potvrdenia",
					"Poplatok",
					"Množstvo"
				],
				noMessage: "Žiadna správa",
				encrypted: "Správa je šifrovaná",
				view: "Pozrieť",
				confirmationsUnknown: "Unknown",
				pending: "Prebieha",
				noTransactions: "Zatiaľ neboli vykonané žiadne prevody",
				loading: "Načítavanie ďalších prevodov..."
			}
		},
		namespacesmosaics: {
			title: 'Namespaces & Mosaics',
			newNamespace: 'New Namespace',
			newMosaic: 'New Mosaic',
			balance: "Súčasný zostatok",
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
			title: "Zožaté bloky",
			feeEarned: "Poplatky zožaté z posledných 25 blokov",
			unknown: "Unknown",
			table: {
				columns: [
					"Blok",
					"Čas",
					'Block difficulty',
					"Poplatok"
				],
				noBlocks: "Žiadne zožaté bloky ",
				loading: "Loading more harvested blocks"
			},
			harvesting: {
				unknown: "Neznámy status",
				start: "Začať žatvu",
				harvesting: "Žatva",
				stop: "Zastaviť žatvu",
				remoteHarvest: {
					startRemoteHarvesting: 'Start delegated harvesting',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			}
		},
		addressBook: {
			title: "Address book",
			addContact: "Add contact",
			table: {
				columns: [
					"Account address",
					"Private Label",
					"Public Label"
				],
				noContacts: "There is no contacts in your address book"
			},
			noLabel: "No label",
			sendNem: "Send NEM",
			edit: "Edit",
			remove: "Remove"
		},
		settings: {
			title: "Nastavenia",
			settings: [
				{
					name: "Jazyk"
				}
			],
			save: "Uložiť zmeny",
			saveSuccess: "Nastavenia boli úspešne uložené"
		}
	}
});
