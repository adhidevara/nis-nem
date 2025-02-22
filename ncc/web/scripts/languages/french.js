define({
	id: 'fr',
	name: 'Français',
	texts: {
		preferences: {
			thousandSeparator: ' ',
			decimalSeparator: '.'
		},
		faults: {
			101: 'Fichier non trouvé.',
			102: 'Le portefeuille a été créé.',
			103: 'Le portefeuille est corrompu. S\'il vous plait, récupérez votre portefeuille à partir de la copie de sauvegarde que vous avez faite lors de la création de votre portefeuille or lorsque vous y avez ajouté un compte.',
			104: 'Le mot de passe est incorrect. En espérant que vous pourrez vous en rappeler. Les mots de passe ne peuvent pas être récupérés s\'ils sont perdus!',
			105: 'No password was provided for the wallet.',
			106: 'Avant de pouvoir utiliser un portefeuille, il doit être ouvert. Pour s\'assurer que vous autoriser à accéder à ce portefeuille, vous devez fournir le mot de passe pour ce portefeuille.',
			107: 'Ce portefeuille ne contient pas ce compte.',
			108: 'Ce compte ne peut pas être retiré. Ce problème se produit généralement si vous tentez de retirer un compte avec une balance supérieure à 0 XEMs ou s\'il s\'agit de votre compte primaire.',
			109: 'Un autre portefeuille avec le même nom existe déjà. S\'il vous plait, veuillez choisir un nom différent.',
			110: 'Le portefeuille contient déjà ce compte.',
			111: 'Le nom du portefeuille est un répertoire.',
			112: 'L\'extension du fichier de portefeuille est incorrecte.',
			113: 'Le portefeuille n\'a pas pu être effacé.',
			121: 'Le fichier de carnet d\'adresses n\'existe pas.',
			122: 'Le carnet d\'adresses a été créé.',
			123: 'Le fichier du carnet d\'adresses est corrompu. S\'il vous plait, récupérer votre carnet d\'adresses à partir d\'une copie de sauvegarde.',
			124: 'Le mot de passe pour le carnet d\'adresses que vous avez fourni est incorrect.',
			125: 'Vous n\'avez fourni aucun mot de passe pour le carnet d\'adresses.',
			127: 'Le carnet d\'adresses ne contient pas cette adresse.',
			128: 'L\'adresse fournie n\'est pas valide.',
			129: 'Un autre carnet d\'adresses avec le même nom existe déjà. S\'il vous plait, utilisez un nom différent.',
			130: 'Le carnet d\'adresses contient déjà cette adresse.',
			131: 'Le nom du carnet d\'adresses est un répertoire.',
			132: 'L\'extension du fichier de carnet d\'adresses est incorrecte.',
			133: 'Le carnet d\'adresses n\'a pas pu être effacé.',
			202: 'Un message chiffré ne peut être envoyé si le destinataire n\'a jamais effectué de transaction auparavant.',
			203: 'Le compte ne peut pas être converti, car certains cosignataires sont inconnus. Les consignataires doivent soit faire partie du même porte-feuille ou effectuer au moins une transaction.',
			305: 'Le serveur d\'infrastructure NEM (NIS) n\'est pas disponible. Essayez de redémarrer le logiciel NEM. Si vous utilisez un serveur NIS distant, vérifier l\'hôte configuré pour vous assurer qu\'il n\'y a pas d\'erreur sinon utiliser un autre serveur NIS distant.',
			306: 'Une erreur que l\'équipe de développement n\'avait pas anticipée s\'est produite. Nous vous présentons nos excuses et nous espérons qu\'un nouvel essai va régler ce problème. Sinon, ouvrez un billet d\'incident auprès de la communauté NIS/NCC de NEM.',
			400: 'Certains paramètres sont manquants ou invalides.',
			401: 'Cette opération ne peut être effectuée car elle pourrait divulguer votre clé privée en l\'envoyant à un server NIS distant.',
			404: 'La ressource que vous avez demandé ne peut être trouvée.',
			500: 'Une erreur que l\'équipe de développement n\'avait pas anticipée s\'est produite. Nous vous présentons nos excuses et nous espérons qu\'un nouvel essai va régler ce problème. Sinon, ouvrez un billet d\'incident auprès de la communauté NIS/NCC de NEM.',
			600: 'NCC requiert que le serveur NIS soit démarré pour pouvoir envoyer et recevoir des transactions vers le nuage NEM. S\'il vous plait, utilisez le menu NCC pour démarrer le nœud local.',
			601: 'Le nœud NIS est déjà démarré. Une deuxième tentative de démarrage du nœud est impossible.',
			602: 'Presque disponible. Le serveur d\'infrastructure NEM charge présentement les blocs. Le portefeuille sera fonctionnel dès que la base de données sera complètement chargée.',
			699: 'Le nombre maximum de cueilleurs permis sur le serveur a été atteint.',
			700: 'Le compte fourni ne satisfait pas les critères de base pour la récolte. C\'est généralement lié à la quantité de XEM dans le compte. Le compte doit avoir au minimum 10000 assigneé XEM pour que la récolte débute.',
			901: 'Il y a une erreur lors de la mise en place du mode déconnecté.',
			1000: 'La clé privée et la clé publique que vous avez fournies ne correspondent pas.',
			1001: 'La clé publique et l\'adresse que vous avez fourni ne correspondent pas.',
			1002: 'L\'adresse ne fait pas partie du réseau principal.',
			1203: 'La date limite fournie est dans le passé. La date limite doit être dans un délai dune journée.',
			1204: 'La date limite fournie est trop dans le futur. La date limite doit être dans un délai dune journée.',
			1205: 'Votre compte n\'a pas les fonds nécessaires pour effectuer cette transaction.',
			1206: 'Le message que vous avez inscrit est trop long pour être envoyé via NEM. Essayez de réduire la taille du message que vous tentez d\'expédier.',
			1207: 'Le hachage de transaction existe déjà dans la base de données ou dans la liste des transactions non confirmées.',
			1208: 'La signature de la transaction n\'a pas pu être vérifiée.',
			1209: 'L\'horodatage de la transaction trop loin dans le passé.',
			1210: 'TL\'horodatage de la transaction trop loin dans le futur.',
			1219: 'La transaction a été rejetée parce que la mémoire tampon dédiée aux transactions est remplie. Des frais plus élevés augmentent les chances que la transaction soit acceptée.',
			1262: 'Le compte de récolte distante à une balance non nulle et ne peut donc pas être utilisé.',
			1263: 'Transaction de transfert d\'importance rejeté. Il y a déjà une transaction de transfert d\'importance en attente.',
			1264: 'La récolte distante est déjà activée.',
			1265: 'La récolte distante n\'est PAS active. Elle ne peut donc pas être désactivée.',
			1266: 'La transaction de transfert d\'importance (récolte distante) est en conflit avec une transaction existante.',
			1271: 'La transaction multisig a été rejetée. Le compte utilisé n\'est cosignataire d\'aucun compte de type multisig.',
			1273: 'Le compte utilisé n\'est cosignataire d\'aucun compte de type multisig. La transaction multisig associée n\'est pas connue du réseau NEM.',
			1274: 'Les transactions multisig ne sont pas permises sur ce compte.',
			1275: 'Modification de compte multisig rejeté. Un des comptes ajoutés est déjà cosignataire.',
			1321: 'Ce compte est inconnu. Un compte à besoin de faire partie d\'au moins une transaction (comme expéditeur ou destinataire) pour être connue du réseau.',

		},
		common: {
			success: 'Succès',
			unknown: 'Statut inconnu',
			unknownMessage: 'NCC n\'a pas reçu de réponse dans un délai raisonnable. La transaction à peut-être été sur le réseau.<br /><br />Veuillez s\'il-vous plait regarder vos transactions avant de refaire cette transaction à nouveau.',
			appStatus: {
				nccUnknown: 'Le statut de NCC est incconnu',
				nccUnavailable: 'NCC est introuvable',
				nccStarting: 'NCC démarre...',
				nisUnknown: 'Le statut de NIS est incconnu',
				nisUnavailable: 'NIS est introuvable',
				nisStarting: 'NIS démarre...',
				notBooted: 'NIS à besoin d\'être démarré. S\'il vous plaît, ouvrez votre portefeuille et démarrez le nœud local via la boîte de dialogue ou configurez le paramètre de démarrage automatique.',
				loading: 'Chargement des blocs de la base de donnée, présentement au bloc:',
				booting: 'Démarrage de NIS...',
				nisInfoNotAvailable: 'L\'information sur NIS n\'est pas encore disponible. Tentative de récupération de l\'information sur NIS...',
				synchronizing: 'NIS est en cours de synchronisation. Présentement au bloc {{1}}, est. {{2}} en retard.',
				daysBehind: {
					0: 'moins d\'une journée',
					1: 'une journée',
					many: '{{1}} jours'
				},
				synchronized: 'NIS est synchronisé!',
				noRemoteNisAvailable: 'Aucun server distant NIS n\'a été trouvé sur le réseau. Vérifier votre connection Internet.'
			},
			addressBook: 'Carnet d\'adresses',
			password: 'Mot de passe',
			passwordValidation: 'Le mot de passe ne peut pas être vide',
			address: 'Adresse',
			privateLabel: 'Étiquette privée',
			publicLabel: 'Étiquette publique',
			noCharge: 'Le compte utilisé ne sera <b>PAS</b> chargé de frais pour cette transaction, il seront chargé au compte multisig.',
			fee: 'Frais',
			multisigFee: 'Frais Multisig',
			useMinimumFee: 'Utiliser les frais minimums',
			feeValidation: 'Les frais ne doivent pas être moins que les frais minimums.',
			justUse: 'Utiliser seulement',
			dueBy: 'Heure dû',
			minutes: 'minute(s)',
			hours: 'heures(s)',
			hoursDue: 'Heure dû',
			hoursDueExplanation: 'Si cette transaction n\'est pas incluse avant la date limite elle sera rejetée.',
			closeButton: 'Fermer',
			cancelButton: 'Annuler',
			sendButton: 'Envoyez',
			account: 'Compte',
			thisAccount: 'Ce compte',
			warning: 'Attention',
			newBuild: 'NOUVELLE VERSION',
			newBuildNumber: 'Une nouvelle version {{1}} est disponible pour téléchargement. Voir <a class="hyperlink--default", href="http://blog.nem.io">blog.nem.io</a> pour tout les détails',

		},
		transactionTypes: {
			20: 'TRANSFERT DE TRANSACTION',
			21: 'TRANSFERT D\'IMPORTANCE ',
			22: 'MODIFICATION DE COMPTE MULTISIG',
			23: 'APPROVISIONNEMENT D\'ESPACE-NOM',
			24: 'CRÉATION DE MOSAÏQUE',
			25: 'PROVISION DE MOSAÏQUE',
			40: 'TRANSACTION MULTISIG',
			50: 'TRANSACTION MULTISIG ',
			51: 'TRANSACTION MULTISIG ',
			52: 'TRANSACTION MULTISIG ',
			53: 'TRANSACTION MULTISIG ',
			54: 'TRANSACTION MULTISIG ',
			55: 'TRANSACTION MULTISIG ',

		},
		transactionDirections: {
			pending: 'Transaction en attente',
			outgoing: 'Transaction sortante',
			incoming: 'Transaction entrante',
			self: 'Faire une transaction vers sois même.',
			importance: 'Transaction d\'importance',
			modification: 'Modification globale de Multisig',
			provision: 'Approvisionnmenet d\'espace-nom',
			mosaicCreation: 'Création de Mosaïque',
			mosaicSupply: 'Provision de Mosaïque'
		},
		modals: {
			error: {
				title: 'Oops!',
				caption: 'ERREUR {{1}}'
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'Oui',
				no: 'Non'
			},
			initialBackup: {
				title: "Bievenue à NEM",
				content: "Vous pouvez créer une copie de sauvegarde de votre portefeuille à partir du menu du coin droit."
			},
			settings: {
				title: 'Paramètres',
				language: {
					label: 'Language'
				},
				remoteServer: {
					tabTitle: 'Serveur Distant',
					protocol: 'Protocole',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Hôte',
					port: 'Port',
					defaultPort: 'Utiliser le port par défaut.'
				},
				autoBoot: {
					tabTitle: 'Démarrage Automatique',
					name: 'Nom du nœud',
					primaryAccount: 'Compte primaire',
					auto: 'Démarrage automatiquement quand le portefeuille est ouvert'
				},
				save: 'Enregistrer',
				saveSuccess: 'Les paramètres ont été enregistrés avec succès'
			},
			signToken: {
				title: "Signer un a jeton avec un compte",
				label: "jeton (url, chaîne, n\'importe quoi)",
				signature: "Jeton signé",
				sign: "Signer"
			},
			multisig: {
				title: 'Convertir ce compte en multisig',
				multisigAccount: 'Compte multisig',
				cosignatories: 'Adresses des cosignataires',
				labelDesc: 'Ce compte est étiqueté comme {{1}}',
				nullLabelDesc: 'Ce compte n\'a pas d\'étiquette.',
				addCosignatory: '+ Ajouter un Cosignataires',
				convert: 'Convertir',
				txConfirm: {
					title: 'Confirmez la conversion en compte Multisig',
					total: 'Total',

				},
				warning: 'Le compte Multisig est sur la liste de cosignataires. Cette action va barrer l\'accès à ce compte et au fond qu\'il contient. Vous ne voulez probablement <bPAS</b> executer cette action.',
				minCosignatoriesDefaultLabel: 'Utiliser les nombre de consignataires par default',
				minCosignatoriesRelativeLabel: 'Changement relatif',
				minCosignatoriesLabel: 'Nombre minimum de consignataires',
				minCosignatoriesZero: 'Utiliser zéro causerais que tout les consignataires soient requis',
				minCosignatoriesOverflow: 'Le nombre spécifier est plus grand que le nombre de consignataires'
			},
			signMultisig: {
				title: 'Signer la transaction multisig',
				original: {
					from: 'Compte Multisig',
					to: 'Destinataire',
					amount: 'Montant',
					fee: 'Frais interne',
					deadline: 'Date Limite'
				},
				multisigFees: 'Frais Multisig',
				multisigTotal: 'Total',
				sender: 'Cosignataire',
				passwordValidation: 'Le mot de passe ne peut pas être vide',
				sending: 'Envoi...',
				txConfirm: {
					title: 'Confirmer la transaction Multisig ',
					message: 'Message',
					encrypted: 'Le message est chiffré',
					noMessage: 'Pas de message',

				}
			},
			sendNem: {
				title: 'Envoyez des XEMs',
				sender: 'Expéditeur',
				thisAccount: 'Ce compte',
				labelDesc: 'Ce compte est étiqueté comme {{1}}',
				nullLabelDesc: 'Ce compte n\'est pas étiqueté',
				amount: 'Montant',
				recipient: 'Compte du destinataire',
				recipientValidation: 'Account addresses must be 40 character long excluding dashes',
				message: 'Message',
				encrypt: 'Chiffrez le message',
				sending: 'Envoi...',
				successMessage: 'Votre transaction à été envoyé avec succès! <br><br>Hachage de transaction: {{1}}',
				txConfirm: {
					title: 'Confirmez la transaction',
					amount: 'Montant',
					to: 'À',
					total: 'Total',
					message: 'Message',
					encrypted: 'Le message est chiffré',
					noMessage: 'Pas de message',
					confirm: 'Confirmer',
					sending: 'Envoi...'
				},
				notBootedWarning: {
					title: 'Le nœud n\'a pas été démarré.',
					message: 'Le nœud local doit être démarré avant de pouvoir envoyer des XEMs!'
				},
				bootingWarning: {
					title: 'Le nœud est en cours de démarrage',
					message: 'S\'il vous plait, attendre que le processus de démarrage soit terminé avant d\'envoyer votre transaction.'
				},
				loadingWarning: {
					title: 'Chargement de la base de donnée'
				}
			},
			clientInfo: {
				title: 'Information sur le Client',
				ncc: 'NEM Community Client - NCC',
				signer: 'Signataire',
				remoteServer: 'Serveur distant',
				local: 'Local',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Synchronisé',
				notSync: 'Pas synchronisé',
				notConnected: 'Pas connecté au Nuage NEM',
				loading: 'Chargement...'
			},
			mosaicDetails: 'Mosaic Details',
			transactionDetails: {
				title: 'Détails de la transaction',
				id: 'ID',
				hash: 'Hachage',
				type: 'Type de transaction',
				direction: 'Transaction Direction',
				pending: 'En attente',
				outgoing: 'Sortant',
				incoming: 'Entrant',
				self: 'Sois même',
				sender: 'Expéditeur',
				multisigAccount: 'Multisig Account',
				issuer: 'Emetteur',
				recipient: 'Destinataire',
				remote: 'À Distance',
				multisigMessage: 'Signatures présente',
				message: 'Message',
				noMessage: 'Aucun message',
				encrypted: 'Le Message est chiffré',
				time: 'Horodatage',
				confirmations: 'Confirmations',
				confirmationsUnknown: 'Inconnu',
				amount: 'Montant',
				multiplier: 'Multiplier',
				innerFee: 'Frais interne',
				multisigFees: 'Frais Multisig',
				cosignatory: 'Cosignataire',
				namespace: 'Espace-Nom',
				rentalFee: 'Frais de location',
				mosaicName: 'Nom de la Mosaïque',
				mosaicQuantity: 'Mosaic quantity',
				mosaicLevy: 'Mosaic levy',
				description: 'Description',
				propertiesLabel: 'Propriétés',
				properties: {
					divisibility: 'Divisibilité',
					initialSupply: 'Initial supply',
					supplyMutable: 'Is supply mutable',
					transferable: 'Est transférable'
				},
				supplyType: 'Fournir le type',
				supplyAmount: 'Fournir le Montant',

			},
			accountDetails: {
				title: 'Détails du compte',
				label: 'Étiquette',
				noLabel: 'Pas d\'étiquette',
				add: 'Ajouter au carnet d\'adresses',
				remove: 'Retirer du carnet d\'adresses',
				balance: 'Balance',
				vested: 'Assigneé',
				importance: 'Importance',
				publicKey: 'Clé publique',
				noPublicKey: 'Pas de clé publique',
				harvestedBlocks: 'Blocs récoltés'
			},
			bootLocalNode: {
				title: 'Démarrage du nœud local',
				account: 'Compte pour démarrarer le nœud local',
				noLabel: '<span class=\'null\'>&lt;Aucune étiquette&gt;</span>',
				wallet: 'Portefeuille',
				node: 'Nom du nœud',
				boot: 'Démarrer',
				booting: 'Démarrage...',
				warning: 'Avertissement du nœud de démarrage',
				warningText: 'Vous essayez de démarrer le nœud <u>{{2}}</u><br/><br/>Démarrer un nœud à distance est présentement impossible à partir de NCC.',
				warningStatement: 'You have auto-boot set to true and you\'re using remote node {{3}}.<br/><br/>Booting remote node is currently impossible from within NCC',
				warningQuestion: 'Êtes-vous certain de vouloir démarrer le nœud<u>{{3}}</u> en utilisant la clé privée du compte {{1}} ({{2}} XEM)?<br><br>Ceci va révéler la <span class=\"sublabelWarning\">clé privée</span> de ce compte au nœud: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Fermeture de portefeuille',
				message: 'Êtes-vous sûr de vouloir fermer ce portefeuille et retourner à la page d\'accueil?'
			},
			createAccount: {
				title: 'Créer un nouveau compte',
				label: 'Étiquette privé',
				wallet: 'Portefeuille',
				successMessage: 'Le compte {{1}} {{#2}}({{2}}){{/2}} à été créé!',
				create: 'Créer'
			},
			showPrivateKey: {
				title: 'Afficher la clé PRIVÉ du compte',
				message: 'Ceci va afficher à l\'écran la clef privée du compte en texte. Dans le cas où un logiciel malveillant serait présent dans votre système, il pourrait être dangereux de procéder à cette opération, car votre clé pourrait être volée. Êtes-vous certain de vouloir procéder?',
				publicKey: 'Clé publique',
				privateKey: 'Clé privée',
				show: 'Afficher les détails du compte'
			},
			showRemotePrivateKey: {
				title: 'Afficher la clé PRIVÉE du compte distant',
				message: 'Ceci va afficher à l\'écran la clef privée du compte distant en texte. Dans le cas où un logiciel malveillant serait présent dans votre système, il pourrait être dangereux de procéder à cette opération, car votre clé pourrait être volée. Êtes-vous certain de vouloir procéder?',

			},
			addAccount: {
				title: 'Ajouter un compte existant',
				privateKey: 'Clé privé du compte',
				wallet: 'Portefeuille',
				successMessage: 'Le compte {{1}} {{#2}}({{2}}){{/2}} à été ajouté à votre portefeuille!',
				add: 'Ajouter',
				label: 'Étiquette'
			},
			setPrimary: {
				title: 'Définir votre compte principal',
				account: 'Le compte a été défini comme votre compte principal',
				noLabel: '<span class=\'null\'>&lt;Aucune étiquette&gt;</span>',
				wallet: 'Portefeuille',
				successMessage: 'Le compte {{1}} {{#2}}({{2}}){{/2}} a été défini comme votre compte principal!',
				set: 'Définir comme compte principal'
			},
			changeWalletName: {
				title: 'Changez le nom du portefeuille',
				wallet: 'Nom actuel du portefeuille',
				newName: 'Nouveau nom du portefeuille',
				successMessage: 'Le nom du portefeuille a été changé avec succès de <em>{{1}}</em> à <em>{{2}}</em>',
				change: 'Changer'
			},
			changeWalletPassword: {
				title: 'Changer le mot de passe du portefeuille',
				wallet: 'Portefeuille',
				password: 'Mot de passe actuel du portefeuille',
				newPassword: 'Nouveau mot de passe',
				confirmPassword: 'Confirmer le nouveau mot de passe',
				successMessage: 'Le mot de passe du portefeuille a été changé avec succès',
				change: 'Changer',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: 'Le mot de passe et le mot de passe de confirmation ne sont pas pareils. S\'il vous plait, assurez-vous de taper votre nouveau mot de passe correctement.'
			},
			exportWalletLight: {
				title: 'Export for lightwallet',
				export: 'Export'
			},
			changeAccountLabel: {
				title: 'Changer l\'étiquette du compte',
				label: 'Étiquette du compte',
				wallet: 'Portefeuille',
				successMessage: 'Le compte {{1}} est maintenant étiquetté comme {{2}}',
				change: 'Changer'
			},
			removeAccount: {
				title: 'Retirer un compte',
				label: 'Étiquette du compte',
				wallet: 'Portefeuille',
				warning: 'S\'il vous plait, assurez-vous que ce compte ne contient plus de XEMs avant de le retirer, sinon les XEMs qu\'il contient seront perdus pour toujours.',
				successMessage: 'Le compte {{1}} {{#2}}({{2}}){{/2}} à été retiré!',
				remove: 'Retirer'
			},
			nisUnavailable: {
				title: 'NIS est non disponible',
				message: 'Déconnecté de NIS, en attente de connexion'
			},
			shutdown: {
				title: 'Fermeture de l\'application',
				message: 'Êtes-vous certain de vouloir fermer l\'application NEM Community Client?'
			},
			activateDelegated: {
				title: 'Activer la récolte distante',
				wallet: 'Portefeuille',
				activate: 'Activer',
				warningText: 'L\'activation va prendre 6 heures (360 blocs). L\'activation ne va PAS démarrer automatiquement la récolte.',
				delegatedAccount: 'Clef Publique du compte délégué',
				builtIn: 'Construit à l\'intérieur du portefeuille',

			},
			deactivateDelegated: {
				title: 'Désactiver la récolte distante',
				wallet: 'Portefeuille',
				deactivate: 'Désactiver',
				warningText: 'La désactivation va prendre 6 heures (360 blocs).'
			},
			startRemote: {
				title: 'Démarrer la récolte distante',
				wallet: 'Portefeuille',
				start: 'Démarrer'
			},
			stopRemote: {
				title: 'Stop Delegated Harvesting',
				wallet: 'Portefeuille',
				stop: 'Arrêtez'
			},
			logoutWarning: {
				leavePage: "Vous partez sans fermer votre portefeuille. Rappelez-vous que si vous laissez votre portefeuille de cette façon, d\'autres peuvent encore être en mesure d\'y accéder depuis cet ordinateur. Pour empêcher cela, s\'il vous plaît vous connecter à l\'aide du menu \"Fermer le portefeuille\" dans le menu déroulant en haut à droite avant de fermer l\'onglet de navigateur ou de naviguer ailleurs."
			},
			addContact: {
				title: 'Ajouter un contact',
				add: 'Ajouter'
			},
			editContact: {
				title: 'Modifier le contact',
				saveChanges: 'Enregistrer les modifications'
			},
			removeContact: {
				title: 'Retirer le contact',
				remove: 'Retirer'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Le portefeuille a été importé avec succès!',
			nav: {
				start: 'Commencer',
				about: 'À propos de NEM',
				settings: 'Paramètres'
			},
			main: {
				leftTitle: 'Nouveau dans <em>NEM</em>?',
				leftButton: 'Créer un nouveau portefeuille ',
				walletNamePlh: 'Nom de votre portefeuille',
				passwordPlh: 'Mot de passe',
				confirmPasswordPlh: 'Confirmez le mot de passe',
				create: 'Créer',
				creating: 'Creation...',
				rightTitle: 'Déjà un <em>NEM</em>bre?',
				rightButton: 'Ouvrir votre portefeuille',
				openButton: 'Ouvrir',
				walletsFound: '<strong>{{1}}</strong> <em>portefeuille(s) trouvé(s)</em>',
				copyright: 'Photographie par <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC chiffre votre portefeuille',
						description: 'La <em>sécurité</em> est très importante pour éviter le vols de vos pièces XEMs &amp; actifs.'
					},
					{
						title: 'Server d\'infrastructure NEM distant',
						description: 'En utilisant un serveur NIS distant, vous n\'avez pas besoin de synchroniser la chaine de bloc au démarrage.',

					},
					{
						title: 'Récolte Distante',
						description: 'La récolte distante vous permet de récolter sur des noeuds NIS distant!',

					},
					{
						title: 'Transaction à Multisignature',
						description: 'Sécurise vos XEM et vos biens via des transactions multisignature dans la chaine de bloc.',

					},
					{
						title: 'Support Mutlilangague Natif',
						description: 'L\'interface usagée de NEM supporte de multiples langages. Voir "Paramêtres".'
					},
					{
						title: 'Vous avez des questions ou commentaires?',
						description: '<a href="http://forum.ournem.com">forum.ournem.com</a> | #ournem on freenode.org | Telegram',

					}
				]
			},
			about: {
				sections: [
					{
						title: 'Comment NCC fonctionne?',
						paragraphs: [
							'<strong>NCC</strong>offre un accès à vos actifs et vos XEMs comme un portefeuille traditionnel le ferait.',
							'<strong>NCC</strong> requiert l\'accès à un serveur <strong>NIS</strong> pour pouvoir être fonctionnelle. Le standard est d\'avoir un serveur local actif (est installé ensemble avec <strong>NCC</strong>)',
							'Vous pouvez aussi configurer un accès à un serveur <strong>NIS</strong> distant.'
						],
						listItems: [
							'Multiples portefeuilles',
							'Définir de multiple compte à être inclus dans votre portefeuille'
						]
					},
					{
						title: 'Qu\'est-ce que le &#42;NIS?',
						paragraphs: [
							'Cette composante est responsable de garder le nuage <strong>NEM</strong> vivant.',
							'Plus il y a de <strong>NIS</strong> sur le réseau, meilleur est la sécurité.,',
							'<strong>NIS</strong> est le point d\'accès au nuage <strong>NEM</strong>.'
						],
						legend: '<strong>&#42;NIS</strong> signifie <strong>Serveur d\'infrastructure NEM (NEM Infrastructure Server)</strong>'
					}
				]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Il y a approximativement {{1}} jours',
			lastAccessJustNow: 'Juste maintenant',
			lastAccessTooltip: 'Dernier accès {{1}}',
			primary: 'primaire',
			primaryShort: 'P',
			noLabel: '<Pas d\'étiquette>',
			copiedToClipboard: 'L\'adresse a été copié dans le presse papier!',
			actions: {
				refreshInfo: 'Actualiser les informations',
				bootLocalNode: 'Démarré le nœud local',
				changeWalletName: 'Changer le nom du portefeuille',
				changeWalletPassword: 'Changer le mot de passe du portefeuille',
				mergeWallets: 'Fusionner des portefeuilles',
				exportWallet: 'Exporter un portefeuille',
				exportWalletLight: 'Export for Lightwallet',
				createAccount: 'Créer un nouveau compte',
				createRealAccountData: 'Créer les données réelles de compte',
				verifyRealAccountData: 'Vérifier les données réelles de compte',
				showPrivateKey: 'Afficher la clé PRIVÉE du compte',
				showRemotePrivateKey: 'Afficher la clé PRIVÉE du compte distant',
				viewDetails: 'Afficher les détails du compte',
				addAccount: 'Ajouter un compte existant',
				changeAccountLabel: 'Modifier l\'étiquette du compte',
				setPrimary: 'Définir comme compte primaire',
				removeAccount: 'Retirer le compte',
				clientInfo: 'Information sur le Client',
				closeWallet: 'Fermer le portefeuille',
				closeProgram: 'Fermer l\'application',
				copyClipboard: 'Copier l\'adresse dans le presse-papier',
				copyDisabled: 'Copier une adresse requière flash',
				convertMultisig: 'Convertir un autre compte en type multisig'
			},
			nav: [
				'Tableau de bord',
				'Messages',
				'Contacts',
				'Transactions',
				'Blocs récoltés',
				'Bourse d\'actif',
				'Nouvelles',
				'Applications',
				'Comptes',
				'Paramètres',
				'Fermer l\'application',
				'Namespaces & Mosaics'
			],
			bootNodeWarning: 'Un nœud local doit être démarré avant de pouvoir utiliser pleinement les fonctionnalités de NCC.'
		},
		dashboard: {
			assets: {
				title: 'Your Mosaics'
			},
			importance: {
				title: 'Score d\'importance',
				unknown: 'statut inconnu',
				start: 'Lancer la récolte locale',
				harvesting: 'Récolte',
				stop: 'Arrêter la récolte locale',
				description: 'importance de compte dans le nuage NEM',
				remoteHarvest: {
					title: 'Récolte Distante',
					activate: 'Activer la récolte distante',
					activating: 'Activation de la récolte distante...',
					active: 'La récolte distante est active',
					deactivate: 'Désactiver la récolte distante',
					deactivating: 'Désactivation de la récolte distante...',
					startRemoteHarvesting: 'Démarrer la récolte distante',
					remotelyHarvesting: 'Récolte à distance en cours',
					stopRemoteHarvesting: 'Arrêter la récolte distante',
					multisigInfo: 'L\'activation ou la déactivation de la récolte distante pour un compte multisyg doit être effectuer à partir d\'un des comptes cosignataire',

				}
			},
			transactions: {
				title: 'Transactions récentes',
				sendNem: 'Envoyer des XEMs',
				signMultisig: 'SIGNER',
				balance: 'Balance courante',
				loading: 'Loading balance',
				accountCosignatories: 'Compte Multisig',
				accountCosignatoriesView: 'view cosignatories',
				vestedBalance: 'Balance assignée',
				syncStatus: '(au blocs {{1}}{{#2}} : est. {{3}} jours en retard{{/2}})',
				notSynced: 'might be inaccurate, NIS not synchronized yet',
				unknown: 'inconnu',
				columns: [
					'',
					'Temps',
					'Expéditeur/Destinataire',
					'Message',
					'',
					'Détails',
					'Confirmations',
					'Frais',
					'Montant'
				],
				noMessage: 'Pas de message',
				encrypted: 'Le message est chiffé',
				view: 'Voir',
				confirmationsUnknown: 'Unknown',
				pending: 'En attente',
				seeAll: 'Voir toutes les transactions',
				noTransactions: 'Aucune transaction n\'a encore été effectuée'
			},
			nemValue: {
				title: 'Statistiques sur la valeur de XEM'
			},
			messages: {
				titleTooltip: 'Messages'
			},
			news: {
				titleTooltip: 'Nouvelles'
			},
			notAvailable: 'Pas encore disponible en version alpha'
		},
		transactions: {
			title: 'Transactions',
			sendNem: 'Envoyer des XEMs',
			balance: 'Balance courante',
			filters: {
				confirmed: 'Confirmé',
				unconfirmed: 'Non-confirmé',
				incoming: 'Entrante',
				outgoing: 'Sortante'
			},
			table: {
				columns: [
					'',
					'Temps',
					'Expéditeur/Destinataire',
					'Message',
					'',
					'Détails',
					'Confirmations',
					'Frais',
					'Montant'
				],
				noMessage: 'Pas de message',
				encrypted: 'Le message est chiffé',
				view: 'Voir',
				confirmationsUnknown: 'Inconnu',
				pending: 'En attente',
				noTransactions: 'Aucune transaction n\'a encore été effectuée',
				loading: 'Chargement de transactions supplémentaire...'
			}
		},
		namespacesmosaics: {
			title: 'Namespaces & Mosaics',
			newNamespace: 'New Namespace',
			newMosaic: 'New Mosaic',
			balance: 'Balance courante',
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
			title: 'Blocs récoltés',
			feeEarned: 'Honoraires perçus pour les 25 derniers blocs récoltés',
			unknown: 'Inconnu',
			table: {
				columns: [
					'Hauteur',
					'Temps',
					'Difficulté du bloc',
					'Frais'
				],
				noBlocks: 'Aucun blocs récoltés ',
				loading: 'Chargement de blocs récoltées supplémentaire'
			},
			harvesting: {
				unknown: 'Statut inconnu',
				start: 'Lancer la récolte locale',
				harvesting: 'Récolte',
				stop: 'Arrêter la récolte locale',
				remoteHarvest: {
					startRemoteHarvesting: 'Démarrer la récolte distante',
					stopRemoteHarvesting: 'Arrêter la récolte distante'
				}
			}
		},
		addressBook: {
			title: 'Carnet d\'adresses',
			addContact: 'Ajouter un contact',
			table: {
				columns: [
					'Adresse de compte',
					'Étiquette privée',
					'Étiquette publique'
				],
				noContacts: 'Il n\'y a pas de contact dans votre carnet d\'adresses.'
			},
			noLabel: 'Pas d\'étiquette',
			sendNem: 'Evoyer des XEMs',
			edit: 'Modifier',
			remove: 'Supprimer'
		},
		settings: {
			title: 'Paramètres',
			settings: [
				{
					name: 'Langue'
				}
			],
			save: 'Enregistrer les modifications',
			saveSuccess: '`Les paramètres ont été enregistrés avec succès'
		}
	}
});
