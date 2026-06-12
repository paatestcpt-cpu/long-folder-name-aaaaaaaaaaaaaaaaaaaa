function FindProxyForURL(url, host) {
	 var resolved_ip = dnsResolve(host);
	 if (url.substring(0,4) == "ftp:")
	 { return "DIRECT"; } 

	 if ( 
	   shExpMatch(host, "192.168.22.*") ) 
	 {  return "PROXY pa-auto-test.proxy.panclouddev.com:8080";  }

	 if ( 
	   shExpMatch(host, "192.168.*.*") || 
	   shExpMatch(host, "172.16.*.*") || 
	   shExpMatch(host, "10.*.*.*") || 
	   shExpMatch(host, "100.64.*.*") ||
	   shExpMatch(host, "54.241.128.21") || 
	   shExpMatch(host, "127.*.*.*") ) 
	 {  return "DIRECT";  }

	 if ( 
	   shExpMatch(host, "*.acs.prismaaccess.com$") || shExpMatch(host, "acs.prismaaccess.com$") || 
	   shExpMatch(host, "cloud-auth.*.apps.paloaltonetworks.com$") ) 
	 {  return "DIRECT";  }

	 if ( 
	   shExpMatch(host, "*.gpcloudservice.com$") || shExpMatch(host, "gpcloudservice.com$") || 
	   shExpMatch(host, "*.panclouddev.com$") || shExpMatch(host, "panclouddev.com$") ) 
	 {  return "DIRECT";  }


	 if ( 
	   shExpMatch(host, "ccs.login.microsoftonline.com$") || 
	   shExpMatch(host, "*.live.com$") || shExpMatch(host, "live.com$") || 
	   shExpMatch(host, "*.auth.microsoft.com$") || shExpMatch(host, "auth.microsoft.com$") || 
	   shExpMatch(host, "*.msftidentity.com$") || shExpMatch(host, "msftidentity.com$") || 
	   shExpMatch(host, "*.msidentity.com$") || shExpMatch(host, "msidentity.com$") || 
	   shExpMatch(host, "account.activedirectory.windowsazure.com$") || 
	   shExpMatch(host, "accounts.accesscontrol.windows.net$") || 
	   shExpMatch(host, "adminwebservice.microsoftonline.com$") || 
	   shExpMatch(host, "api.passwordreset.microsoftonline.com$") || 
	   shExpMatch(host, "autologon.microsoftazuread-sso.com$") || 
	   shExpMatch(host, "becws.microsoftonline.com$") || 
	   shExpMatch(host, "*.azure.com$") || shExpMatch(host, "azure.com$") || 
	   shExpMatch(host, "*.msauth.net$") || shExpMatch(host, "msauth.net$") || 
	   shExpMatch(host, "*.microsoftazuread-sso.com$") || shExpMatch(host, "microsoftazuread-sso.com$") || 
	   shExpMatch(host, "*.msftauth.net$") || shExpMatch(host, "msftauth.net$") || 
	   shExpMatch(host, "*.microsoft.com$") || shExpMatch(host, "microsoft.com$") || 
	   shExpMatch(host, "*.office.net$") || shExpMatch(host, "office.net$") || 
	   shExpMatch(host, "*.notifications.skype.com$") || shExpMatch(host, "notifications.skype.com$") || 
	   shExpMatch(host, "*.outlook.com$") || shExpMatch(host, "outlook.com$") || 
	   shExpMatch(host, "outlook.com$") || 
	   shExpMatch(host, "outlook.office365.com$") ) 
	 {  return "DIRECT";  }

	 if ( 
	   shExpMatch(host, "*.microsoftonline.com$") || shExpMatch(host, "microsoftonline.com$") || 
	   shExpMatch(host, "*.msftauth.net$") || shExpMatch(host, "msftauth.net$") || 
	   shExpMatch(host, "*.msauth.net$") || shExpMatch(host, "msauth.net$") || 
	   shExpMatch(host, "*.windowsazure.com$") || shExpMatch(host, "windowsazure.com$") || 
	   shExpMatch(host, "*.microsoftazuread-sso.com$") || shExpMatch(host, "microsoftazuread-sso.com$") || 
	   shExpMatch(host, "*.login.microsoftonline.com$") || shExpMatch(host, "login.microsoftonline.com$") || 
	   shExpMatch(host, "*.auth.microsoft.com$") || shExpMatch(host, "auth.microsoft.com$") || 
	   shExpMatch(host, "*.okta.com$") || shExpMatch(host, "okta.com$") ||
	   shExpMatch(host, "*.oktacdn.com$") || shExpMatch(host, "oktacdn.com$") ||
	   shExpMatch(host, "mysignins.microsoft.com$") ) 
	 {  return "DIRECT";  }

	 if ( 
	   shExpMatch(host, "10.0.16.138") ) 
	 {  return "PROXY pa-auto-test.proxy.panclouddev.com:8080";  }


 return "PROXY pa-auto-test.proxy.panclouddev.com:8080";}
