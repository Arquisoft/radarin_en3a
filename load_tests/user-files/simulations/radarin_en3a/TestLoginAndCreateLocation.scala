package radarin_en3a

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class TestLoginAndCreateLocation extends Simulation {

	val httpProtocol = http
		.baseUrl("https://radarintest.solidcommunity.net")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.acceptHeader("*/*")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-US,en;q=0.5")
		.userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:88.0) Gecko/20100101 Firefox/88.0")

	val headers_0 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Mon, 03 May 2021 09:56:35 GMT",
		"If-None-Match" -> """W/"c09-17931a87838"""",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_1 = Map(
		"If-None-Match" -> """W/"4bd-BL95fGBQzgmbXAZBK7CjJPISqP4"""",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com")

	val headers_2 = Map(
		"Content-Type" -> "application/json",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com")

	val headers_4 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_5 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
		"Origin" -> "https://solidcommunity.net",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_7 = Map(
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiZFVoekxlVEZ5SVVKalVxYTJXNEJBMFhIdUtkeFJsOTMxU1BPcDNYSGV3RSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoibExCeFJEenpVTkQ1bHZtQzVTWVEwQy04VExRUmowc2NtRnFmWTAwWElVVSIsInkiOiJZX0ROc21iVjU1ZlpMcnJQb0pkWEp2YWMtMkthSzIwUnRLb3A4bVd2bnQ4In19.eyJodHUiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldC90b2tlbiIsImh0bSI6IlBPU1QiLCJqdGkiOiJkZGJiM2NjZS1kYTVmLTRjYTEtOTgwYS0xZGM5NTkyMzgwZWEiLCJpYXQiOjE2MjAwNjIxNjl9.8HvrX1AqScDhm2TouXlgWZ2CgHDf0M9CcIxE4V9njK2sNuQW855bqndkvQaGJUySLyGnnTvGNBQTb2G79WSoYA",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com")

	val headers_8 = Map(
		"If-None-Match" -> """W/"c12-Z36ZHSpfv7aY0naqiROUaAxY1zY"""",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com")

	val headers_9 = Map(
		"Content-Type" -> "application/json; charset=UTF-8",
		"Origin" -> "null")

	val headers_10 = Map(
		"Accept" -> "text/turtle",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiZFVoekxlVEZ5SVVKalVxYTJXNEJBMFhIdUtkeFJsOTMxU1BPcDNYSGV3RSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoibExCeFJEenpVTkQ1bHZtQzVTWVEwQy04VExRUmowc2NtRnFmWTAwWElVVSIsInkiOiJZX0ROc21iVjU1ZlpMcnJQb0pkWEp2YWMtMkthSzIwUnRLb3A4bVd2bnQ4In19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9wcm9maWxlL2NhcmQiLCJodG0iOiJHRVQiLCJqdGkiOiI4MTk0NGQ4NS04NDM4LTRmYTQtOGFkZS05YTQzN2Y0YTM5N2QiLCJpYXQiOjE2MjAwNjIxNzB9._82ebDWUikyHJrtZajD_LCu9nS1vezLzsg5eEil1hF3XK1V0KLqFWZj7BtoTtE98fLf2ZgGM3hPOzagSZF4CyA",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcxNzcwLCJpYXQiOjE2MjAwNjIxNzAsImp0aSI6IjM0NWI5Y2JkNDk2ZTQ5OTEiLCJjbmYiOnsiamt0IjoiZFVoekxlVEZ5SVVKalVxYTJXNEJBMFhIdUtkeFJsOTMxU1BPcDNYSGV3RSJ9LCJjbGllbnRfaWQiOiJmYzlhM2I2ODNjZjNjOWNjZDFhMTM4Y2U3MDkxMDMyZCIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.cG8RVMU5sW7y6hXO_LkAAL7TPPhJQ0Cm6R5pQobags7N6Y05Z-nbXFHF-rnwxpdRntpiiOo4fxyFD-3zFY85Tmspn_iCPrKbuELmgk8pT3H4XJN-5Tap16JofRs1XWmpKlue2M_OB3GdwZksDUyNjFaZyJiLpu5p8urxFyrG-M8fkwSHJfkRWfwbSX0yIWx2Qi0kzcbgFus8cdEPn9f2M0089PG-IsJhsQ8ynoFPAZ4hBcCEenbA78i6HEeQBXYZRHrLwW6nlVBEfNZULII4AjCg1kA0uOFV8q8gUQGwDCx838tCAPWvURqp9AtyOSo4xkWMQF9dptxdbF5XYKnmRA")

	val headers_11 = Map(
		"Access-Control-Request-Headers" -> "content-type",
		"Access-Control-Request-Method" -> "POST",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com")

	val headers_14 = Map(
		"Accept" -> "text/turtle",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiZFVoekxlVEZ5SVVKalVxYTJXNEJBMFhIdUtkeFJsOTMxU1BPcDNYSGV3RSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoibExCeFJEenpVTkQ1bHZtQzVTWVEwQy04VExRUmowc2NtRnFmWTAwWElVVSIsInkiOiJZX0ROc21iVjU1ZlpMcnJQb0pkWEp2YWMtMkthSzIwUnRLb3A4bVd2bnQ4In19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9wcm9maWxlL2NhcmQiLCJodG0iOiJHRVQiLCJqdGkiOiJlOGUyNThlNi1iMGFkLTQ1ODAtYWZlNi00MThhZTQ2MDgyN2MiLCJpYXQiOjE2MjAwNjIxNzB9.2ob8WT9sTd8yTfjk207CwcZNF7nglI0GY05l664jdyxQmemXcfHzThtpfrK5g2vvF-D2gRZydqMRGGadH9tJwQ",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcxNzcwLCJpYXQiOjE2MjAwNjIxNzAsImp0aSI6IjM0NWI5Y2JkNDk2ZTQ5OTEiLCJjbmYiOnsiamt0IjoiZFVoekxlVEZ5SVVKalVxYTJXNEJBMFhIdUtkeFJsOTMxU1BPcDNYSGV3RSJ9LCJjbGllbnRfaWQiOiJmYzlhM2I2ODNjZjNjOWNjZDFhMTM4Y2U3MDkxMDMyZCIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.cG8RVMU5sW7y6hXO_LkAAL7TPPhJQ0Cm6R5pQobags7N6Y05Z-nbXFHF-rnwxpdRntpiiOo4fxyFD-3zFY85Tmspn_iCPrKbuELmgk8pT3H4XJN-5Tap16JofRs1XWmpKlue2M_OB3GdwZksDUyNjFaZyJiLpu5p8urxFyrG-M8fkwSHJfkRWfwbSX0yIWx2Qi0kzcbgFus8cdEPn9f2M0089PG-IsJhsQ8ynoFPAZ4hBcCEenbA78i6HEeQBXYZRHrLwW6nlVBEfNZULII4AjCg1kA0uOFV8q8gUQGwDCx838tCAPWvURqp9AtyOSo4xkWMQF9dptxdbF5XYKnmRA")

	val headers_16 = Map(
		"Accept" -> "text/turtle",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiZFVoekxlVEZ5SVVKalVxYTJXNEJBMFhIdUtkeFJsOTMxU1BPcDNYSGV3RSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoibExCeFJEenpVTkQ1bHZtQzVTWVEwQy04VExRUmowc2NtRnFmWTAwWElVVSIsInkiOiJZX0ROc21iVjU1ZlpMcnJQb0pkWEp2YWMtMkthSzIwUnRLb3A4bVd2bnQ4In19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9yYWRhcmluL2xvY2F0aW9ucy50dGwiLCJodG0iOiJHRVQiLCJqdGkiOiJiNmRhNTIwMS0xZTIxLTRiZDItYWJhNC01MmQ1NzA3OGFiMzIiLCJpYXQiOjE2MjAwNjIxNzF9.iljLuWP80xmEyCAXc9f9Zw36R8P5E9A9u1jzV9UKiopWERe6VL93eAYXS0KYDdRSQUleR2RmpFKVNNgWqGlm5g",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcxNzcwLCJpYXQiOjE2MjAwNjIxNzAsImp0aSI6IjM0NWI5Y2JkNDk2ZTQ5OTEiLCJjbmYiOnsiamt0IjoiZFVoekxlVEZ5SVVKalVxYTJXNEJBMFhIdUtkeFJsOTMxU1BPcDNYSGV3RSJ9LCJjbGllbnRfaWQiOiJmYzlhM2I2ODNjZjNjOWNjZDFhMTM4Y2U3MDkxMDMyZCIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.cG8RVMU5sW7y6hXO_LkAAL7TPPhJQ0Cm6R5pQobags7N6Y05Z-nbXFHF-rnwxpdRntpiiOo4fxyFD-3zFY85Tmspn_iCPrKbuELmgk8pT3H4XJN-5Tap16JofRs1XWmpKlue2M_OB3GdwZksDUyNjFaZyJiLpu5p8urxFyrG-M8fkwSHJfkRWfwbSX0yIWx2Qi0kzcbgFus8cdEPn9f2M0089PG-IsJhsQ8ynoFPAZ4hBcCEenbA78i6HEeQBXYZRHrLwW6nlVBEfNZULII4AjCg1kA0uOFV8q8gUQGwDCx838tCAPWvURqp9AtyOSo4xkWMQF9dptxdbF5XYKnmRA")

	val headers_17 = Map(
		"Accept" -> "text/turtle",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiZFVoekxlVEZ5SVVKalVxYTJXNEJBMFhIdUtkeFJsOTMxU1BPcDNYSGV3RSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoibExCeFJEenpVTkQ1bHZtQzVTWVEwQy04VExRUmowc2NtRnFmWTAwWElVVSIsInkiOiJZX0ROc21iVjU1ZlpMcnJQb0pkWEp2YWMtMkthSzIwUnRLb3A4bVd2bnQ4In19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9wcm9maWxlL2NhcmQiLCJodG0iOiJHRVQiLCJqdGkiOiIyNzUxOGYzNy1kOTYzLTQwNzItYjc2Yi0zMDY1OWFjYmFiMTciLCJpYXQiOjE2MjAwNjIxNzR9.E345Jiun3R7NGH6mxsIfKtusJDz0K48QD27sVFv1s1KxbYMAfInH98U_48TkbjtYyOPVlQVpub42BB8fNLyQFQ",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcxNzcwLCJpYXQiOjE2MjAwNjIxNzAsImp0aSI6IjM0NWI5Y2JkNDk2ZTQ5OTEiLCJjbmYiOnsiamt0IjoiZFVoekxlVEZ5SVVKalVxYTJXNEJBMFhIdUtkeFJsOTMxU1BPcDNYSGV3RSJ9LCJjbGllbnRfaWQiOiJmYzlhM2I2ODNjZjNjOWNjZDFhMTM4Y2U3MDkxMDMyZCIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.cG8RVMU5sW7y6hXO_LkAAL7TPPhJQ0Cm6R5pQobags7N6Y05Z-nbXFHF-rnwxpdRntpiiOo4fxyFD-3zFY85Tmspn_iCPrKbuELmgk8pT3H4XJN-5Tap16JofRs1XWmpKlue2M_OB3GdwZksDUyNjFaZyJiLpu5p8urxFyrG-M8fkwSHJfkRWfwbSX0yIWx2Qi0kzcbgFus8cdEPn9f2M0089PG-IsJhsQ8ynoFPAZ4hBcCEenbA78i6HEeQBXYZRHrLwW6nlVBEfNZULII4AjCg1kA0uOFV8q8gUQGwDCx838tCAPWvURqp9AtyOSo4xkWMQF9dptxdbF5XYKnmRA")

	val headers_18 = Map(
		"Accept" -> "text/turtle",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiZFVoekxlVEZ5SVVKalVxYTJXNEJBMFhIdUtkeFJsOTMxU1BPcDNYSGV3RSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoibExCeFJEenpVTkQ1bHZtQzVTWVEwQy04VExRUmowc2NtRnFmWTAwWElVVSIsInkiOiJZX0ROc21iVjU1ZlpMcnJQb0pkWEp2YWMtMkthSzIwUnRLb3A4bVd2bnQ4In19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9yYWRhcmluL2xvY2F0aW9ucy50dGwiLCJodG0iOiJHRVQiLCJqdGkiOiJjNmE3MDJlYy1jOWFhLTRmYzEtYWZiMi05MmMzYzFmNjk2MDIiLCJpYXQiOjE2MjAwNjIxNzR9.PLofvTs0gLPM9LHkglLy6yFGR87Sl4VvbBEwWRpUwReDH6HPPD0l3PWd-WxxRQ3mzmIMplVpfW44Bido4cibnw",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcxNzcwLCJpYXQiOjE2MjAwNjIxNzAsImp0aSI6IjM0NWI5Y2JkNDk2ZTQ5OTEiLCJjbmYiOnsiamt0IjoiZFVoekxlVEZ5SVVKalVxYTJXNEJBMFhIdUtkeFJsOTMxU1BPcDNYSGV3RSJ9LCJjbGllbnRfaWQiOiJmYzlhM2I2ODNjZjNjOWNjZDFhMTM4Y2U3MDkxMDMyZCIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.cG8RVMU5sW7y6hXO_LkAAL7TPPhJQ0Cm6R5pQobags7N6Y05Z-nbXFHF-rnwxpdRntpiiOo4fxyFD-3zFY85Tmspn_iCPrKbuELmgk8pT3H4XJN-5Tap16JofRs1XWmpKlue2M_OB3GdwZksDUyNjFaZyJiLpu5p8urxFyrG-M8fkwSHJfkRWfwbSX0yIWx2Qi0kzcbgFus8cdEPn9f2M0089PG-IsJhsQ8ynoFPAZ4hBcCEenbA78i6HEeQBXYZRHrLwW6nlVBEfNZULII4AjCg1kA0uOFV8q8gUQGwDCx838tCAPWvURqp9AtyOSo4xkWMQF9dptxdbF5XYKnmRA")

	val headers_19 = Map(
		"Content-Type" -> "application/sparql-update",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiZFVoekxlVEZ5SVVKalVxYTJXNEJBMFhIdUtkeFJsOTMxU1BPcDNYSGV3RSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoibExCeFJEenpVTkQ1bHZtQzVTWVEwQy04VExRUmowc2NtRnFmWTAwWElVVSIsInkiOiJZX0ROc21iVjU1ZlpMcnJQb0pkWEp2YWMtMkthSzIwUnRLb3A4bVd2bnQ4In19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9yYWRhcmluL2xvY2F0aW9ucy50dGwiLCJodG0iOiJQQVRDSCIsImp0aSI6IjgxMDdiYTVlLTY4OTYtNDVjYS1iMTdiLWNjOWZmMzE5YTBhOSIsImlhdCI6MTYyMDA2MjE3NX0.7PjGm9ymYQzyc_RdsyZKcFl_E2lo7NKABq_59ydTgUAQOiY1KeZuiNata7MOtS6XiyoHaxu9f1kftbS64nmSCQ",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcxNzcwLCJpYXQiOjE2MjAwNjIxNzAsImp0aSI6IjM0NWI5Y2JkNDk2ZTQ5OTEiLCJjbmYiOnsiamt0IjoiZFVoekxlVEZ5SVVKalVxYTJXNEJBMFhIdUtkeFJsOTMxU1BPcDNYSGV3RSJ9LCJjbGllbnRfaWQiOiJmYzlhM2I2ODNjZjNjOWNjZDFhMTM4Y2U3MDkxMDMyZCIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.cG8RVMU5sW7y6hXO_LkAAL7TPPhJQ0Cm6R5pQobags7N6Y05Z-nbXFHF-rnwxpdRntpiiOo4fxyFD-3zFY85Tmspn_iCPrKbuELmgk8pT3H4XJN-5Tap16JofRs1XWmpKlue2M_OB3GdwZksDUyNjFaZyJiLpu5p8urxFyrG-M8fkwSHJfkRWfwbSX0yIWx2Qi0kzcbgFus8cdEPn9f2M0089PG-IsJhsQ8ynoFPAZ4hBcCEenbA78i6HEeQBXYZRHrLwW6nlVBEfNZULII4AjCg1kA0uOFV8q8gUQGwDCx838tCAPWvURqp9AtyOSo4xkWMQF9dptxdbF5XYKnmRA")

	val headers_20 = Map(
		"Content-Type" -> "application/sparql-update",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiZFVoekxlVEZ5SVVKalVxYTJXNEJBMFhIdUtkeFJsOTMxU1BPcDNYSGV3RSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoibExCeFJEenpVTkQ1bHZtQzVTWVEwQy04VExRUmowc2NtRnFmWTAwWElVVSIsInkiOiJZX0ROc21iVjU1ZlpMcnJQb0pkWEp2YWMtMkthSzIwUnRLb3A4bVd2bnQ4In19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9yYWRhcmluL2xvY2F0aW9ucy50dGwiLCJodG0iOiJQQVRDSCIsImp0aSI6ImIxNzUzMGRkLTRlMjMtNGYzNS1iYjc4LTI3NjZkZDQ5ZjQ5YyIsImlhdCI6MTYyMDA2MjE3OH0.KOUQolH27Kw8hHyjX7bs0Uek2j5jmCYLYdapoH9cov__DjFZ1E4kX49kLVinjqmLC9wcs1Oofc47XiSlZPNLFg",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcxNzcwLCJpYXQiOjE2MjAwNjIxNzAsImp0aSI6IjM0NWI5Y2JkNDk2ZTQ5OTEiLCJjbmYiOnsiamt0IjoiZFVoekxlVEZ5SVVKalVxYTJXNEJBMFhIdUtkeFJsOTMxU1BPcDNYSGV3RSJ9LCJjbGllbnRfaWQiOiJmYzlhM2I2ODNjZjNjOWNjZDFhMTM4Y2U3MDkxMDMyZCIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.cG8RVMU5sW7y6hXO_LkAAL7TPPhJQ0Cm6R5pQobags7N6Y05Z-nbXFHF-rnwxpdRntpiiOo4fxyFD-3zFY85Tmspn_iCPrKbuELmgk8pT3H4XJN-5Tap16JofRs1XWmpKlue2M_OB3GdwZksDUyNjFaZyJiLpu5p8urxFyrG-M8fkwSHJfkRWfwbSX0yIWx2Qi0kzcbgFus8cdEPn9f2M0089PG-IsJhsQ8ynoFPAZ4hBcCEenbA78i6HEeQBXYZRHrLwW6nlVBEfNZULII4AjCg1kA0uOFV8q8gUQGwDCx838tCAPWvURqp9AtyOSo4xkWMQF9dptxdbF5XYKnmRA")

	val headers_26 = Map(
		"Content-Type" -> "application/sparql-update",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiZFVoekxlVEZ5SVVKalVxYTJXNEJBMFhIdUtkeFJsOTMxU1BPcDNYSGV3RSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoibExCeFJEenpVTkQ1bHZtQzVTWVEwQy04VExRUmowc2NtRnFmWTAwWElVVSIsInkiOiJZX0ROc21iVjU1ZlpMcnJQb0pkWEp2YWMtMkthSzIwUnRLb3A4bVd2bnQ4In19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9yYWRhcmluL2xvY2F0aW9ucy50dGwiLCJodG0iOiJQQVRDSCIsImp0aSI6ImQyNThmNTNlLTUyZTctNDQ2YS1iZWY2LTZiYTU5NjBhZWE4NiIsImlhdCI6MTYyMDA2MjE4N30.DecicLAPEYdOgTleCzUmJXrQaM5K0f_S4uYK1raSPRuIo_CPs2HI_MP5EFbtIHGNsB1XKgCiDQwZ4Q63o2WffA",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcxNzcwLCJpYXQiOjE2MjAwNjIxNzAsImp0aSI6IjM0NWI5Y2JkNDk2ZTQ5OTEiLCJjbmYiOnsiamt0IjoiZFVoekxlVEZ5SVVKalVxYTJXNEJBMFhIdUtkeFJsOTMxU1BPcDNYSGV3RSJ9LCJjbGllbnRfaWQiOiJmYzlhM2I2ODNjZjNjOWNjZDFhMTM4Y2U3MDkxMDMyZCIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.cG8RVMU5sW7y6hXO_LkAAL7TPPhJQ0Cm6R5pQobags7N6Y05Z-nbXFHF-rnwxpdRntpiiOo4fxyFD-3zFY85Tmspn_iCPrKbuELmgk8pT3H4XJN-5Tap16JofRs1XWmpKlue2M_OB3GdwZksDUyNjFaZyJiLpu5p8urxFyrG-M8fkwSHJfkRWfwbSX0yIWx2Qi0kzcbgFus8cdEPn9f2M0089PG-IsJhsQ8ynoFPAZ4hBcCEenbA78i6HEeQBXYZRHrLwW6nlVBEfNZULII4AjCg1kA0uOFV8q8gUQGwDCx838tCAPWvURqp9AtyOSo4xkWMQF9dptxdbF5XYKnmRA")

    val uri1 = "https://radarinen3awebapp.herokuapp.com"
    val uri2 = "https://solidcommunity.net"
    val uri3 = "https://radarinen3arestapi.herokuapp.com/api"
    val uri4 = "https://www.googleapis.com/geolocation/v1/geolocate"

	val scn = scenario("TestLoginAndCreateLocation")
		.exec(http("request_0")
			.get(uri1 + "/")
			.headers(headers_0))
		.pause(5)
		.exec(http("request_1")
			.get("/.well-known/openid-configuration")
			.headers(headers_1)
			.resources(http("request_2")
			.post(uri2 + "/register")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandcreatelocation/0002_request.json")),
            http("request_3")
			.get(uri2 + "/.well-known/openid-configuration")
			.headers(headers_1),
            http("request_4")
			.get(uri2 + "/authorize?client_id=fc9a3b683cf3c9ccd1a138ce7091032d&redirect_uri=https%3A%2F%2Fradarinen3awebapp.herokuapp.com%2F&response_type=code&scope=openid%20webid&state=038c50ce1326433e807627c310a9cbe8&code_challenge=h8CsJIdRTmkhUzElsazhHBSoLfSvvFESaoCbKTvrdR0&code_challenge_method=S256&response_mode=query")
			.headers(headers_4)))
		.pause(4)
		.exec(http("request_5")
			.post(uri2 + "/login/password")
			.headers(headers_5)
			.formParam("username", "radarintest")
			.formParam("password", "Radarintest1.")
			.formParam("response_type", "code")
			.formParam("display", "")
			.formParam("scope", "openid webid")
			.formParam("client_id", "fc9a3b683cf3c9ccd1a138ce7091032d")
			.formParam("redirect_uri", "https://radarinen3awebapp.herokuapp.com/")
			.formParam("state", "038c50ce1326433e807627c310a9cbe8")
			.formParam("nonce", "")
			.formParam("request", "")
			.resources(http("request_6")
			.get(uri2 + "/.well-known/openid-configuration")
			.headers(headers_1),
            http("request_7")
			.post(uri2 + "/token")
			.headers(headers_7)
			.formParam("grant_type", "authorization_code")
			.formParam("redirect_uri", "https://radarinen3awebapp.herokuapp.com/")
			.formParam("code", "5d2e526b3c7c06068993030a864d69b4")
			.formParam("code_verifier", "c37994b991d2486ea2982df78d427e6cd4235572a95b481082ba01ac418b492173c847477c19402e853fa23a492cb793")
			.formParam("client_id", "fc9a3b683cf3c9ccd1a138ce7091032d")
			.basicAuth("fc9a3b683cf3c9ccd1a138ce7091032d","ac0cc9bd8f7021d634aa721fb10e9c0c"),
            http("request_8")
			.get(uri2 + "/jwks")
			.headers(headers_8),
            http("request_9")
			.post(uri4 + "?key=AIzaSyB2h2OuRcUgy5N-5hsZqiPW6sH3n_rptiQ")
			.headers(headers_9)
			.body(RawFileBody("radarin_en3a/testloginandcreatelocation/0009_request.json")),
            http("request_10")
			.get("/profile/card")
			.headers(headers_10),
            http("request_11")
			.options(uri3 + "/users/getByWebId")
			.headers(headers_11),
            http("request_12")
			.post(uri3 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandcreatelocation/0012_request.json")),
            http("request_13")
			.options(uri3 + "/locations/add")
			.headers(headers_11),
            http("request_14")
			.get("/profile/card")
			.headers(headers_14),
            http("request_15")
			.post(uri3 + "/locations/add")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandcreatelocation/0015_request.json")),
            http("request_16")
			.get("/radarin/locations.ttl")
			.headers(headers_16)))
		.pause(1)
		.exec(http("request_17")
			.get("/profile/card")
			.headers(headers_17)
			.resources(http("request_18")
			.get("/radarin/locations.ttl")
			.headers(headers_18),
            http("request_19")
			.patch("/radarin/locations.ttl")
			.headers(headers_19)
			.body(RawFileBody("radarin_en3a/testloginandcreatelocation/0019_request.dat"))))
		.pause(2)
		.exec(http("request_20")
			.patch("/radarin/locations.ttl")
			.headers(headers_20)
			.body(RawFileBody("radarin_en3a/testloginandcreatelocation/0020_request.dat")))
		.pause(5)
		.exec(http("request_21")
			.post(uri4 + "?key=AIzaSyB2h2OuRcUgy5N-5hsZqiPW6sH3n_rptiQ")
			.headers(headers_9)
			.body(RawFileBody("radarin_en3a/testloginandcreatelocation/0021_request.json"))
			.resources(http("request_22")
			.options(uri3 + "/users/getByWebId")
			.headers(headers_11),
            http("request_23")
			.post(uri3 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandcreatelocation/0023_request.json")),
            http("request_24")
			.options(uri3 + "/locations/add")
			.headers(headers_11),
            http("request_25")
			.post(uri3 + "/locations/add")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandcreatelocation/0025_request.json"))))
		.pause(2)
		.exec(http("request_26")
			.patch("/radarin/locations.ttl")
			.headers(headers_26)
			.body(RawFileBody("radarin_en3a/testloginandcreatelocation/0026_request.dat")))
		.pause(1)
		.exec(http("request_27")
			.post(uri3 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandcreatelocation/0027_request.json"))
			.resources(http("request_28")
			.options(uri3 + "/locations/add")
			.headers(headers_11),
            http("request_29")
			.post(uri3 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandcreatelocation/0029_request.json")),
            http("request_30")
			.post(uri3 + "/locations/add")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandcreatelocation/0030_request.json")),
            http("request_31")
			.post(uri3 + "/locations/add")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandcreatelocation/0031_request.json"))))

	setUp(scn.inject(constantUsersPerSec(2) during (30 seconds) randomized )).protocols(httpProtocol)
}
