package radarin_en3a

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class TestLoginAndNavigate extends Simulation {

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
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoiYTBzbU5jaGUwWDlFQ1lhMWhfSmJydWVNNy1rTmNqY3ZyYzRINk0xdG5mZyIsInkiOiJ0OHYzRUhrelcxdHRydXVkbi1jeHYwcnhnLWF1THo2cFlPWWpDOTZ2Z1RRIn19.eyJodHUiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldC90b2tlbiIsImh0bSI6IlBPU1QiLCJqdGkiOiI0YmVkNGRkYy03NzdhLTRlZDMtYTQ5OS0wNWI2ZmZiY2NjN2MiLCJpYXQiOjE2MjAwNjMxMTF9.zRjaauji2Cxo0xB1-KXNhsbQYTnuBclkM9e78gdmJrqSZVrpWTN0_KvFNQoJwVJsmPPQg_uRMeQOcpBOSo2w1w",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com")

	val headers_8 = Map(
		"If-None-Match" -> """W/"c12-Z36ZHSpfv7aY0naqiROUaAxY1zY"""",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com")

	val headers_9 = Map(
		"Content-Type" -> "application/json; charset=UTF-8",
		"Origin" -> "null")

	val headers_10 = Map(
		"Access-Control-Request-Headers" -> "authorization,dpop",
		"Access-Control-Request-Method" -> "GET",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com")

	val headers_11 = Map(
		"Access-Control-Request-Headers" -> "content-type",
		"Access-Control-Request-Method" -> "POST",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com")

	val headers_15 = Map(
		"Accept" -> "text/turtle",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoiYTBzbU5jaGUwWDlFQ1lhMWhfSmJydWVNNy1rTmNqY3ZyYzRINk0xdG5mZyIsInkiOiJ0OHYzRUhrelcxdHRydXVkbi1jeHYwcnhnLWF1THo2cFlPWWpDOTZ2Z1RRIn19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9wcm9maWxlL2NhcmQiLCJodG0iOiJHRVQiLCJqdGkiOiI3MGYzZjJkNC00ZjU1LTQ1NGQtYjFkZi02ZGZkNTU1NDQ3Y2UiLCJpYXQiOjE2MjAwNjMxMTJ9.OjydofYLohv5oSpGxf_3GU1iGCgED6I6LzDTCKOZoWAJ8Py4mjMR1L5qG8yJE4J5a9eygp70RXmAbqjkdi6SeA",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcyNzEyLCJpYXQiOjE2MjAwNjMxMTIsImp0aSI6ImE4ZGNkZDJiYTMzYWU1NGMiLCJjbmYiOnsiamt0IjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSJ9LCJjbGllbnRfaWQiOiJmMjhhY2Q4NWRlZjE1YzEyYjE1MDc3OWYxM2YxZjkzOSIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.gYNuxJh5zsRSLZleh_LEVh5FW1ZAMrTNMbvT6z8of7LLnqr-3f6jAIgmZ8GP6vKaHD55MRopeNLwOU6dDu41wLGHluxBQhQ-63I7tq2-IsiXeu8pKC8sQw2E3cWecxMXxGy4sE0tBlmprr8hxQVahx4DjfN1Co9aXlRZyGSwAxx3Os2NSEp-lo7VeyzLjxzZY2AYWuqx32Yxwg55JzcJxKFtMB9ldnCM55iWE97GbI3Wto3m4y9F9kIxYuSM0LqjFOKbEgjXdBn4jnCdwXAm-u-Q09JwzuCwOzvt5kxCyOtzIy8yjuB05N275ZNBNuBgr2c6Eem-n_MpiaHIImF4bQ")

	val headers_16 = Map(
		"Accept" -> "text/turtle",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoiYTBzbU5jaGUwWDlFQ1lhMWhfSmJydWVNNy1rTmNqY3ZyYzRINk0xdG5mZyIsInkiOiJ0OHYzRUhrelcxdHRydXVkbi1jeHYwcnhnLWF1THo2cFlPWWpDOTZ2Z1RRIn19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9wcm9maWxlL2NhcmQiLCJodG0iOiJHRVQiLCJqdGkiOiIwNDliYWQxNS03ZTIxLTQ4NGMtYTNhZC0wZDZiMDdiMTE0ZjUiLCJpYXQiOjE2MjAwNjMxMTJ9.uKvD9UTZaRLAw8SW7yAGmXaD54LV4B6--rja8KAqWS7kL3GhknsnBiPf9mhZczBKe4wJpr2TwRPVqsd1DOki7A",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcyNzEyLCJpYXQiOjE2MjAwNjMxMTIsImp0aSI6ImE4ZGNkZDJiYTMzYWU1NGMiLCJjbmYiOnsiamt0IjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSJ9LCJjbGllbnRfaWQiOiJmMjhhY2Q4NWRlZjE1YzEyYjE1MDc3OWYxM2YxZjkzOSIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.gYNuxJh5zsRSLZleh_LEVh5FW1ZAMrTNMbvT6z8of7LLnqr-3f6jAIgmZ8GP6vKaHD55MRopeNLwOU6dDu41wLGHluxBQhQ-63I7tq2-IsiXeu8pKC8sQw2E3cWecxMXxGy4sE0tBlmprr8hxQVahx4DjfN1Co9aXlRZyGSwAxx3Os2NSEp-lo7VeyzLjxzZY2AYWuqx32Yxwg55JzcJxKFtMB9ldnCM55iWE97GbI3Wto3m4y9F9kIxYuSM0LqjFOKbEgjXdBn4jnCdwXAm-u-Q09JwzuCwOzvt5kxCyOtzIy8yjuB05N275ZNBNuBgr2c6Eem-n_MpiaHIImF4bQ")

	val headers_17 = Map(
		"Accept" -> "text/turtle",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoiYTBzbU5jaGUwWDlFQ1lhMWhfSmJydWVNNy1rTmNqY3ZyYzRINk0xdG5mZyIsInkiOiJ0OHYzRUhrelcxdHRydXVkbi1jeHYwcnhnLWF1THo2cFlPWWpDOTZ2Z1RRIn19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9yYWRhcmluL2xvY2F0aW9ucy50dGwiLCJodG0iOiJHRVQiLCJqdGkiOiIxMzZkMDUwMi05NzE5LTRmM2UtYjgzNC04YTU5MmFhNGFiMGMiLCJpYXQiOjE2MjAwNjMxMTN9.vuiMXR3p1DKPN5E-bAtbR-woox1TEEdpixid-XHYpvuk8P6x3PcxAVtqqIUX9yerwuqKu8bR_SkyOj0TxwXamw",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcyNzEyLCJpYXQiOjE2MjAwNjMxMTIsImp0aSI6ImE4ZGNkZDJiYTMzYWU1NGMiLCJjbmYiOnsiamt0IjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSJ9LCJjbGllbnRfaWQiOiJmMjhhY2Q4NWRlZjE1YzEyYjE1MDc3OWYxM2YxZjkzOSIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.gYNuxJh5zsRSLZleh_LEVh5FW1ZAMrTNMbvT6z8of7LLnqr-3f6jAIgmZ8GP6vKaHD55MRopeNLwOU6dDu41wLGHluxBQhQ-63I7tq2-IsiXeu8pKC8sQw2E3cWecxMXxGy4sE0tBlmprr8hxQVahx4DjfN1Co9aXlRZyGSwAxx3Os2NSEp-lo7VeyzLjxzZY2AYWuqx32Yxwg55JzcJxKFtMB9ldnCM55iWE97GbI3Wto3m4y9F9kIxYuSM0LqjFOKbEgjXdBn4jnCdwXAm-u-Q09JwzuCwOzvt5kxCyOtzIy8yjuB05N275ZNBNuBgr2c6Eem-n_MpiaHIImF4bQ")

	val headers_18 = Map(
		"Accept" -> "application/n-quads,application/trig;q=0.95,application/ld+json;q=0.9,application/n-triples;q=0.8,*/*;q=0.1",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com")

	val headers_19 = Map("Accept" -> "image/webp,*/*")

	val headers_20 = Map(
		"Content-Type" -> "application/sparql-update",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoiYTBzbU5jaGUwWDlFQ1lhMWhfSmJydWVNNy1rTmNqY3ZyYzRINk0xdG5mZyIsInkiOiJ0OHYzRUhrelcxdHRydXVkbi1jeHYwcnhnLWF1THo2cFlPWWpDOTZ2Z1RRIn19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9yYWRhcmluL2xvY2F0aW9ucy50dGwiLCJodG0iOiJQQVRDSCIsImp0aSI6IjY5YzNhOTdiLTUwZjUtNDBlNi05NzZhLTVlMDUxYWZlYTQ3MSIsImlhdCI6MTYyMDA2MzExN30.mIPzLzNJvwFkS6lYuvNa-wORaFvfgXF8ShBrTH9kXT9aaeG4pS0FQXGAL3WerYshMAgu6-KKDACcBa1s10-ycQ",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcyNzEyLCJpYXQiOjE2MjAwNjMxMTIsImp0aSI6ImE4ZGNkZDJiYTMzYWU1NGMiLCJjbmYiOnsiamt0IjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSJ9LCJjbGllbnRfaWQiOiJmMjhhY2Q4NWRlZjE1YzEyYjE1MDc3OWYxM2YxZjkzOSIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.gYNuxJh5zsRSLZleh_LEVh5FW1ZAMrTNMbvT6z8of7LLnqr-3f6jAIgmZ8GP6vKaHD55MRopeNLwOU6dDu41wLGHluxBQhQ-63I7tq2-IsiXeu8pKC8sQw2E3cWecxMXxGy4sE0tBlmprr8hxQVahx4DjfN1Co9aXlRZyGSwAxx3Os2NSEp-lo7VeyzLjxzZY2AYWuqx32Yxwg55JzcJxKFtMB9ldnCM55iWE97GbI3Wto3m4y9F9kIxYuSM0LqjFOKbEgjXdBn4jnCdwXAm-u-Q09JwzuCwOzvt5kxCyOtzIy8yjuB05N275ZNBNuBgr2c6Eem-n_MpiaHIImF4bQ")

	val headers_24 = Map(
		"Accept" -> "text/turtle",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoiYTBzbU5jaGUwWDlFQ1lhMWhfSmJydWVNNy1rTmNqY3ZyYzRINk0xdG5mZyIsInkiOiJ0OHYzRUhrelcxdHRydXVkbi1jeHYwcnhnLWF1THo2cFlPWWpDOTZ2Z1RRIn19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9wcm9maWxlL2NhcmQiLCJodG0iOiJHRVQiLCJqdGkiOiJkNjc4YjgzMC0zYjM2LTQwMjEtYmY3Zi1mMjhiOWU1MGQyOWIiLCJpYXQiOjE2MjAwNjMxMjV9.IhgChvON9-wJrIM068QhSCB4LmCspx-Owd4HweHcb7NZ-y2x6maPoNqjXIWXXE6aDgj55PZm4YoLQPN3Enz45A",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcyNzEyLCJpYXQiOjE2MjAwNjMxMTIsImp0aSI6ImE4ZGNkZDJiYTMzYWU1NGMiLCJjbmYiOnsiamt0IjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSJ9LCJjbGllbnRfaWQiOiJmMjhhY2Q4NWRlZjE1YzEyYjE1MDc3OWYxM2YxZjkzOSIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.gYNuxJh5zsRSLZleh_LEVh5FW1ZAMrTNMbvT6z8of7LLnqr-3f6jAIgmZ8GP6vKaHD55MRopeNLwOU6dDu41wLGHluxBQhQ-63I7tq2-IsiXeu8pKC8sQw2E3cWecxMXxGy4sE0tBlmprr8hxQVahx4DjfN1Co9aXlRZyGSwAxx3Os2NSEp-lo7VeyzLjxzZY2AYWuqx32Yxwg55JzcJxKFtMB9ldnCM55iWE97GbI3Wto3m4y9F9kIxYuSM0LqjFOKbEgjXdBn4jnCdwXAm-u-Q09JwzuCwOzvt5kxCyOtzIy8yjuB05N275ZNBNuBgr2c6Eem-n_MpiaHIImF4bQ")

	val headers_25 = Map(
		"Accept" -> "text/turtle",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoiYTBzbU5jaGUwWDlFQ1lhMWhfSmJydWVNNy1rTmNqY3ZyYzRINk0xdG5mZyIsInkiOiJ0OHYzRUhrelcxdHRydXVkbi1jeHYwcnhnLWF1THo2cFlPWWpDOTZ2Z1RRIn19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9yYWRhcmluL2xvY2F0aW9ucy50dGwiLCJodG0iOiJHRVQiLCJqdGkiOiJiODBkMWVjMC03ZDgxLTRkMWQtYTczNi04ODI4Y2MxZTU0ZTUiLCJpYXQiOjE2MjAwNjMxMjZ9._95wvAOImkubFqHTTppBO4UKMVR9D5-xtwRTg1AJIYQ6YhfQAVZyXkMUTw7vtpzH7Ek0ByYu_Y_MYl-touru1w",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcyNzEyLCJpYXQiOjE2MjAwNjMxMTIsImp0aSI6ImE4ZGNkZDJiYTMzYWU1NGMiLCJjbmYiOnsiamt0IjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSJ9LCJjbGllbnRfaWQiOiJmMjhhY2Q4NWRlZjE1YzEyYjE1MDc3OWYxM2YxZjkzOSIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.gYNuxJh5zsRSLZleh_LEVh5FW1ZAMrTNMbvT6z8of7LLnqr-3f6jAIgmZ8GP6vKaHD55MRopeNLwOU6dDu41wLGHluxBQhQ-63I7tq2-IsiXeu8pKC8sQw2E3cWecxMXxGy4sE0tBlmprr8hxQVahx4DjfN1Co9aXlRZyGSwAxx3Os2NSEp-lo7VeyzLjxzZY2AYWuqx32Yxwg55JzcJxKFtMB9ldnCM55iWE97GbI3Wto3m4y9F9kIxYuSM0LqjFOKbEgjXdBn4jnCdwXAm-u-Q09JwzuCwOzvt5kxCyOtzIy8yjuB05N275ZNBNuBgr2c6Eem-n_MpiaHIImF4bQ")

	val headers_30 = Map(
		"Accept" -> "text/turtle",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoiYTBzbU5jaGUwWDlFQ1lhMWhfSmJydWVNNy1rTmNqY3ZyYzRINk0xdG5mZyIsInkiOiJ0OHYzRUhrelcxdHRydXVkbi1jeHYwcnhnLWF1THo2cFlPWWpDOTZ2Z1RRIn19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9wcm9maWxlL2NhcmQiLCJodG0iOiJHRVQiLCJqdGkiOiJiMzYzMWM4YS03MzBhLTQ3MGItYjVkYS1lZGQ1YTE1ODkxMGUiLCJpYXQiOjE2MjAwNjMxMjl9.PtnyRAQ-93XYUjj37XgY1IbCQ9iZ6Qcw54VUA5IVj-yvA_GndrWt79g5POfXqWjQ3jFHlNiI80L54gleKoCFxQ",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcyNzEyLCJpYXQiOjE2MjAwNjMxMTIsImp0aSI6ImE4ZGNkZDJiYTMzYWU1NGMiLCJjbmYiOnsiamt0IjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSJ9LCJjbGllbnRfaWQiOiJmMjhhY2Q4NWRlZjE1YzEyYjE1MDc3OWYxM2YxZjkzOSIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.gYNuxJh5zsRSLZleh_LEVh5FW1ZAMrTNMbvT6z8of7LLnqr-3f6jAIgmZ8GP6vKaHD55MRopeNLwOU6dDu41wLGHluxBQhQ-63I7tq2-IsiXeu8pKC8sQw2E3cWecxMXxGy4sE0tBlmprr8hxQVahx4DjfN1Co9aXlRZyGSwAxx3Os2NSEp-lo7VeyzLjxzZY2AYWuqx32Yxwg55JzcJxKFtMB9ldnCM55iWE97GbI3Wto3m4y9F9kIxYuSM0LqjFOKbEgjXdBn4jnCdwXAm-u-Q09JwzuCwOzvt5kxCyOtzIy8yjuB05N275ZNBNuBgr2c6Eem-n_MpiaHIImF4bQ")

	val headers_32 = Map(
		"Accept" -> "text/turtle",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoiYTBzbU5jaGUwWDlFQ1lhMWhfSmJydWVNNy1rTmNqY3ZyYzRINk0xdG5mZyIsInkiOiJ0OHYzRUhrelcxdHRydXVkbi1jeHYwcnhnLWF1THo2cFlPWWpDOTZ2Z1RRIn19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9wcm9maWxlL2NhcmQiLCJodG0iOiJHRVQiLCJqdGkiOiJlZTBhMWVlMS03ZDhhLTQwNTQtYmVhNi1kNmM0NWYzM2I1MmQiLCJpYXQiOjE2MjAwNjMxMjl9.px5GrGSMERtmcXMm5QDQ--4Pq8YwINm23IFHMLzOUUH79TyB9ukrCW9d1adRmtYYUqU_Pyk7frhF9s_VaDbJjQ",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcyNzEyLCJpYXQiOjE2MjAwNjMxMTIsImp0aSI6ImE4ZGNkZDJiYTMzYWU1NGMiLCJjbmYiOnsiamt0IjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSJ9LCJjbGllbnRfaWQiOiJmMjhhY2Q4NWRlZjE1YzEyYjE1MDc3OWYxM2YxZjkzOSIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.gYNuxJh5zsRSLZleh_LEVh5FW1ZAMrTNMbvT6z8of7LLnqr-3f6jAIgmZ8GP6vKaHD55MRopeNLwOU6dDu41wLGHluxBQhQ-63I7tq2-IsiXeu8pKC8sQw2E3cWecxMXxGy4sE0tBlmprr8hxQVahx4DjfN1Co9aXlRZyGSwAxx3Os2NSEp-lo7VeyzLjxzZY2AYWuqx32Yxwg55JzcJxKFtMB9ldnCM55iWE97GbI3Wto3m4y9F9kIxYuSM0LqjFOKbEgjXdBn4jnCdwXAm-u-Q09JwzuCwOzvt5kxCyOtzIy8yjuB05N275ZNBNuBgr2c6Eem-n_MpiaHIImF4bQ")

	val headers_33 = Map(
		"Accept" -> "text/turtle",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoiYTBzbU5jaGUwWDlFQ1lhMWhfSmJydWVNNy1rTmNqY3ZyYzRINk0xdG5mZyIsInkiOiJ0OHYzRUhrelcxdHRydXVkbi1jeHYwcnhnLWF1THo2cFlPWWpDOTZ2Z1RRIn19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9wcm9maWxlL2NhcmQiLCJodG0iOiJHRVQiLCJqdGkiOiJmNmRlZTUyYS03OWU2LTQxZWQtOTJkZC1jZGRkZGIyNmNlOTEiLCJpYXQiOjE2MjAwNjMxMjl9.9bCzbqPL8tR9Ze9TL95L6xQxgf3D0z2h4YmxHXrPDs1_H_AuUUvrmZ8jXlEwazFEKdGIvsnSvrngZqYLkJ6xeA",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcyNzEyLCJpYXQiOjE2MjAwNjMxMTIsImp0aSI6ImE4ZGNkZDJiYTMzYWU1NGMiLCJjbmYiOnsiamt0IjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSJ9LCJjbGllbnRfaWQiOiJmMjhhY2Q4NWRlZjE1YzEyYjE1MDc3OWYxM2YxZjkzOSIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.gYNuxJh5zsRSLZleh_LEVh5FW1ZAMrTNMbvT6z8of7LLnqr-3f6jAIgmZ8GP6vKaHD55MRopeNLwOU6dDu41wLGHluxBQhQ-63I7tq2-IsiXeu8pKC8sQw2E3cWecxMXxGy4sE0tBlmprr8hxQVahx4DjfN1Co9aXlRZyGSwAxx3Os2NSEp-lo7VeyzLjxzZY2AYWuqx32Yxwg55JzcJxKFtMB9ldnCM55iWE97GbI3Wto3m4y9F9kIxYuSM0LqjFOKbEgjXdBn4jnCdwXAm-u-Q09JwzuCwOzvt5kxCyOtzIy8yjuB05N275ZNBNuBgr2c6Eem-n_MpiaHIImF4bQ")

	val headers_34 = Map(
		"Accept" -> "text/turtle",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoiYTBzbU5jaGUwWDlFQ1lhMWhfSmJydWVNNy1rTmNqY3ZyYzRINk0xdG5mZyIsInkiOiJ0OHYzRUhrelcxdHRydXVkbi1jeHYwcnhnLWF1THo2cFlPWWpDOTZ2Z1RRIn19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9yYWRhcmluL2xvY2F0aW9ucy50dGwiLCJodG0iOiJHRVQiLCJqdGkiOiIzNWM5Y2Q2MC05NGUxLTQ4YzQtOGM3YS01ZDZkMWJlNmEzOTIiLCJpYXQiOjE2MjAwNjMxMzB9.hIen5CmBzCwCMBDweij1Oh2OkEfzLLkx1IASvNQTl-PgPND_9tUZSCtm7FnxZzzpsb34Agp7RvIHAGhTfFwWOA",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcyNzEyLCJpYXQiOjE2MjAwNjMxMTIsImp0aSI6ImE4ZGNkZDJiYTMzYWU1NGMiLCJjbmYiOnsiamt0IjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSJ9LCJjbGllbnRfaWQiOiJmMjhhY2Q4NWRlZjE1YzEyYjE1MDc3OWYxM2YxZjkzOSIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.gYNuxJh5zsRSLZleh_LEVh5FW1ZAMrTNMbvT6z8of7LLnqr-3f6jAIgmZ8GP6vKaHD55MRopeNLwOU6dDu41wLGHluxBQhQ-63I7tq2-IsiXeu8pKC8sQw2E3cWecxMXxGy4sE0tBlmprr8hxQVahx4DjfN1Co9aXlRZyGSwAxx3Os2NSEp-lo7VeyzLjxzZY2AYWuqx32Yxwg55JzcJxKFtMB9ldnCM55iWE97GbI3Wto3m4y9F9kIxYuSM0LqjFOKbEgjXdBn4jnCdwXAm-u-Q09JwzuCwOzvt5kxCyOtzIy8yjuB05N275ZNBNuBgr2c6Eem-n_MpiaHIImF4bQ")

	val headers_36 = Map(
		"Accept" -> "text/turtle",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoiYTBzbU5jaGUwWDlFQ1lhMWhfSmJydWVNNy1rTmNqY3ZyYzRINk0xdG5mZyIsInkiOiJ0OHYzRUhrelcxdHRydXVkbi1jeHYwcnhnLWF1THo2cFlPWWpDOTZ2Z1RRIn19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9yYWRhcmluL2xvY2F0aW9ucy50dGwiLCJodG0iOiJHRVQiLCJqdGkiOiI0OTY0NmRiNS03ODk0LTQ3ZmEtYWZmYS05ZjAyOGJlNWEyNzUiLCJpYXQiOjE2MjAwNjMxMzB9.EUfV5z-QiTCDo3dCeZlHWbHwjn1eJ-SkoR16DwNjGDYegZdm-AGkhmJnQVJBeBweQPEIoZjehk_ZGNdT2YG2DQ",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcyNzEyLCJpYXQiOjE2MjAwNjMxMTIsImp0aSI6ImE4ZGNkZDJiYTMzYWU1NGMiLCJjbmYiOnsiamt0IjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSJ9LCJjbGllbnRfaWQiOiJmMjhhY2Q4NWRlZjE1YzEyYjE1MDc3OWYxM2YxZjkzOSIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.gYNuxJh5zsRSLZleh_LEVh5FW1ZAMrTNMbvT6z8of7LLnqr-3f6jAIgmZ8GP6vKaHD55MRopeNLwOU6dDu41wLGHluxBQhQ-63I7tq2-IsiXeu8pKC8sQw2E3cWecxMXxGy4sE0tBlmprr8hxQVahx4DjfN1Co9aXlRZyGSwAxx3Os2NSEp-lo7VeyzLjxzZY2AYWuqx32Yxwg55JzcJxKFtMB9ldnCM55iWE97GbI3Wto3m4y9F9kIxYuSM0LqjFOKbEgjXdBn4jnCdwXAm-u-Q09JwzuCwOzvt5kxCyOtzIy8yjuB05N275ZNBNuBgr2c6Eem-n_MpiaHIImF4bQ")

	val headers_39 = Map(
		"Accept" -> "text/turtle",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoiYTBzbU5jaGUwWDlFQ1lhMWhfSmJydWVNNy1rTmNqY3ZyYzRINk0xdG5mZyIsInkiOiJ0OHYzRUhrelcxdHRydXVkbi1jeHYwcnhnLWF1THo2cFlPWWpDOTZ2Z1RRIn19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9wcm9maWxlL2NhcmQiLCJodG0iOiJHRVQiLCJqdGkiOiIwMDUzOWUyMi03YTUwLTRlNzAtYjMzMy1mYjBhNGMwMGFhNmEiLCJpYXQiOjE2MjAwNjMxMzB9.AVdb4XY-9EXFG0vPNn4O4lAC73FxGAvvqm0JiyEx68xBl-9C5O9ENCMnQXyBqHNJF8CEu23zj19oJKTfRtewMQ",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcyNzEyLCJpYXQiOjE2MjAwNjMxMTIsImp0aSI6ImE4ZGNkZDJiYTMzYWU1NGMiLCJjbmYiOnsiamt0IjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSJ9LCJjbGllbnRfaWQiOiJmMjhhY2Q4NWRlZjE1YzEyYjE1MDc3OWYxM2YxZjkzOSIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.gYNuxJh5zsRSLZleh_LEVh5FW1ZAMrTNMbvT6z8of7LLnqr-3f6jAIgmZ8GP6vKaHD55MRopeNLwOU6dDu41wLGHluxBQhQ-63I7tq2-IsiXeu8pKC8sQw2E3cWecxMXxGy4sE0tBlmprr8hxQVahx4DjfN1Co9aXlRZyGSwAxx3Os2NSEp-lo7VeyzLjxzZY2AYWuqx32Yxwg55JzcJxKFtMB9ldnCM55iWE97GbI3Wto3m4y9F9kIxYuSM0LqjFOKbEgjXdBn4jnCdwXAm-u-Q09JwzuCwOzvt5kxCyOtzIy8yjuB05N275ZNBNuBgr2c6Eem-n_MpiaHIImF4bQ")

	val headers_66 = Map(
		"Accept" -> "text/turtle",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoiYTBzbU5jaGUwWDlFQ1lhMWhfSmJydWVNNy1rTmNqY3ZyYzRINk0xdG5mZyIsInkiOiJ0OHYzRUhrelcxdHRydXVkbi1jeHYwcnhnLWF1THo2cFlPWWpDOTZ2Z1RRIn19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9wcm9maWxlL2NhcmQiLCJodG0iOiJHRVQiLCJqdGkiOiI5YjA1YTk5ZC0zYjlkLTQwYTMtOTFlMy1kMTRiYTljMjU4MTMiLCJpYXQiOjE2MjAwNjMxMzN9.9Jh_ttRVHrWWA4QZDVTdb2Py7PQobW2ext0RcLiDUwWKMmu_6OUpFmhY69INyPJLR3VV57Zp89YMYLC_IHqUlQ",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcyNzEyLCJpYXQiOjE2MjAwNjMxMTIsImp0aSI6ImE4ZGNkZDJiYTMzYWU1NGMiLCJjbmYiOnsiamt0IjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSJ9LCJjbGllbnRfaWQiOiJmMjhhY2Q4NWRlZjE1YzEyYjE1MDc3OWYxM2YxZjkzOSIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.gYNuxJh5zsRSLZleh_LEVh5FW1ZAMrTNMbvT6z8of7LLnqr-3f6jAIgmZ8GP6vKaHD55MRopeNLwOU6dDu41wLGHluxBQhQ-63I7tq2-IsiXeu8pKC8sQw2E3cWecxMXxGy4sE0tBlmprr8hxQVahx4DjfN1Co9aXlRZyGSwAxx3Os2NSEp-lo7VeyzLjxzZY2AYWuqx32Yxwg55JzcJxKFtMB9ldnCM55iWE97GbI3Wto3m4y9F9kIxYuSM0LqjFOKbEgjXdBn4jnCdwXAm-u-Q09JwzuCwOzvt5kxCyOtzIy8yjuB05N275ZNBNuBgr2c6Eem-n_MpiaHIImF4bQ")

	val headers_67 = Map("Origin" -> "https://radarinen3awebapp.herokuapp.com")

	val headers_72 = Map(
		"Accept" -> "text/turtle",
		"DPoP" -> "eyJhbGciOiJFUzI1NiIsInR5cCI6ImRwb3Arand0IiwiandrIjp7Imt0eSI6IkVDIiwia2lkIjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSIsImFsZyI6IkVTMjU2IiwiY3J2IjoiUC0yNTYiLCJ4IjoiYTBzbU5jaGUwWDlFQ1lhMWhfSmJydWVNNy1rTmNqY3ZyYzRINk0xdG5mZyIsInkiOiJ0OHYzRUhrelcxdHRydXVkbi1jeHYwcnhnLWF1THo2cFlPWWpDOTZ2Z1RRIn19.eyJodHUiOiJodHRwczovL3JhZGFyaW50ZXN0LnNvbGlkY29tbXVuaXR5Lm5ldC9wcm9maWxlL2NhcmQiLCJodG0iOiJHRVQiLCJqdGkiOiI2Y2VjMWExNC1mYmU0LTRjODctOTZkNy1mYTJhNDRjOTkyMzciLCJpYXQiOjE2MjAwNjMxNDN9._vD1KsH5b9rwMBpQfURCj7FUjZe9sGmZ9IxgW8fyPfTMRPIKVsobGBeqhNtgJ1zOq8xQh6o5iWdj1_13KpICSw",
		"Origin" -> "https://radarinen3awebapp.herokuapp.com",
		"authorization" -> "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IkpxS29zX2J0SHBnIn0.eyJpc3MiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldCIsImF1ZCI6InNvbGlkIiwic3ViIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIiwiZXhwIjoxNjIxMjcyNzEyLCJpYXQiOjE2MjAwNjMxMTIsImp0aSI6ImE4ZGNkZDJiYTMzYWU1NGMiLCJjbmYiOnsiamt0IjoiSmJENzFyTWFiLWRUMFd6eUtYN0ZqY00tOFo4U0RDczdMZERGVnNtZU5iSSJ9LCJjbGllbnRfaWQiOiJmMjhhY2Q4NWRlZjE1YzEyYjE1MDc3OWYxM2YxZjkzOSIsIndlYmlkIjoiaHR0cHM6Ly9yYWRhcmludGVzdC5zb2xpZGNvbW11bml0eS5uZXQvcHJvZmlsZS9jYXJkI21lIn0.gYNuxJh5zsRSLZleh_LEVh5FW1ZAMrTNMbvT6z8of7LLnqr-3f6jAIgmZ8GP6vKaHD55MRopeNLwOU6dDu41wLGHluxBQhQ-63I7tq2-IsiXeu8pKC8sQw2E3cWecxMXxGy4sE0tBlmprr8hxQVahx4DjfN1Co9aXlRZyGSwAxx3Os2NSEp-lo7VeyzLjxzZY2AYWuqx32Yxwg55JzcJxKFtMB9ldnCM55iWE97GbI3Wto3m4y9F9kIxYuSM0LqjFOKbEgjXdBn4jnCdwXAm-u-Q09JwzuCwOzvt5kxCyOtzIy8yjuB05N275ZNBNuBgr2c6Eem-n_MpiaHIImF4bQ")

    val uri01 = "https://raulng.inrupt.net/profile/card"
    val uri02 = "https://sferlo.inrupt.net/profile/card"
    val uri03 = "https://radarinen3awebapp.herokuapp.com"
    val uri04 = "https://radarinen3arestapi.herokuapp.com/api"
    val uri06 = "https://testradarin3.solidcommunity.net/profile/card"
    val uri07 = "https://arcampa.solidcommunity.net/profile/card"
    val uri08 = "https://raulng2.inrupt.net/profile/card"
    val uri09 = "https://solidcommunity.net"
    val uri10 = "https://uo269570.solidcommunity.net/profile/card"
    val uri11 = "https://sergioen3a.inrupt.net/profile/card"
    val uri12 = "https://www.googleapis.com/geolocation/v1/geolocate"

	val scn = scenario("TestLoginAndNavigate")
		.exec(http("request_0")
			.get(uri03 + "/")
			.headers(headers_0))
		.pause(5)
		.exec(http("request_1")
			.get("/.well-known/openid-configuration")
			.headers(headers_1)
			.resources(http("request_2")
			.post(uri09 + "/register")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0002_request.json")),
            http("request_3")
			.get(uri09 + "/.well-known/openid-configuration")
			.headers(headers_1),
            http("request_4")
			.get(uri09 + "/authorize?client_id=f28acd85def15c12b150779f13f1f939&redirect_uri=https%3A%2F%2Fradarinen3awebapp.herokuapp.com%2F&response_type=code&scope=openid%20webid&state=f98587eba4844e5299b03e0e00e5b8d3&code_challenge=1esvQKf77-9sEhzmmMQKvvPyPdFQNXrMMOdLNfkFBRA&code_challenge_method=S256&response_mode=query")
			.headers(headers_4)))
		.pause(2)
		.exec(http("request_5")
			.post(uri09 + "/login/password")
			.headers(headers_5)
			.formParam("username", "radarintest")
			.formParam("password", "Radarintest1.")
			.formParam("response_type", "code")
			.formParam("display", "")
			.formParam("scope", "openid webid")
			.formParam("client_id", "f28acd85def15c12b150779f13f1f939")
			.formParam("redirect_uri", "https://radarinen3awebapp.herokuapp.com/")
			.formParam("state", "f98587eba4844e5299b03e0e00e5b8d3")
			.formParam("nonce", "")
			.formParam("request", "")
			.resources(http("request_6")
			.get(uri09 + "/.well-known/openid-configuration")
			.headers(headers_1),
            http("request_7")
			.post(uri09 + "/token")
			.headers(headers_7)
			.formParam("grant_type", "authorization_code")
			.formParam("redirect_uri", "https://radarinen3awebapp.herokuapp.com/")
			.formParam("code", "c01d36cc46b6e1fb51abecd8985a6b4e")
			.formParam("code_verifier", "905ed48cae3b4ae9bf7069af87f540d1db7e74f66aed4a4db60af0a4a9eab318ec90269034ec4f4cba0c599cdcca677c")
			.formParam("client_id", "f28acd85def15c12b150779f13f1f939")
			.basicAuth("f28acd85def15c12b150779f13f1f939","a10ece589b44f3827cbed61648ebe62e"),
            http("request_8")
			.get(uri09 + "/jwks")
			.headers(headers_8),
            http("request_9")
			.post(uri12 + "?key=AIzaSyB2h2OuRcUgy5N-5hsZqiPW6sH3n_rptiQ")
			.headers(headers_9)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0009_request.json")),
            http("request_10")
			.options("/profile/card")
			.headers(headers_10),
            http("request_11")
			.options(uri04 + "/users/getByWebId")
			.headers(headers_11),
            http("request_12")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0012_request.json")),
            http("request_13")
			.options(uri04 + "/locations/add")
			.headers(headers_11),
            http("request_14")
			.post(uri04 + "/locations/add")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0014_request.json")),
            http("request_15")
			.get("/profile/card")
			.headers(headers_15),
            http("request_16")
			.get("/profile/card")
			.headers(headers_16),
            http("request_17")
			.get("/radarin/locations.ttl")
			.headers(headers_17)))
		.pause(2)
		.exec(http("request_18")
			.get("/profile/card")
			.headers(headers_18)
			.resources(http("request_19")
			.get(uri03 + "/static/media/default_profile_pic.d436baad.svg")
			.headers(headers_19),
            http("request_20")
			.patch("/radarin/locations.ttl")
			.headers(headers_20)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0020_request.dat")),
            http("request_21")
			.get(uri07)
			.headers(headers_18),
            http("request_22")
			.get(uri10)
			.headers(headers_18),
            http("request_23")
			.get(uri06)
			.headers(headers_18)))
		.pause(6)
		.exec(http("request_24")
			.get("/profile/card")
			.headers(headers_24)
			.resources(http("request_25")
			.get("/radarin/locations.ttl")
			.headers(headers_25),
            http("request_26")
			.get(uri11)
			.headers(headers_18),
            http("request_27")
			.get(uri01)
			.headers(headers_18),
            http("request_28")
			.get(uri02)
			.headers(headers_18),
            http("request_29")
			.get(uri08)
			.headers(headers_18),
            http("request_30")
			.get("/profile/card")
			.headers(headers_30),
            http("request_31")
			.post(uri12 + "?key=AIzaSyB2h2OuRcUgy5N-5hsZqiPW6sH3n_rptiQ")
			.headers(headers_9)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0031_request.json")),
            http("request_32")
			.get("/profile/card")
			.headers(headers_32),
            http("request_33")
			.get("/profile/card")
			.headers(headers_33),
            http("request_34")
			.get("/radarin/locations.ttl")
			.headers(headers_34),
            http("request_35")
			.options(uri04 + "/users/getByWebId")
			.headers(headers_11),
            http("request_36")
			.get("/radarin/locations.ttl")
			.headers(headers_36),
            http("request_37")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0037_request.json")),
            http("request_38")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0038_request.json")),
            http("request_39")
			.get("/profile/card")
			.headers(headers_39),
            http("request_40")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0040_request.json")),
            http("request_41")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0041_request.json")),
            http("request_42")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0042_request.json")),
            http("request_43")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0043_request.json")),
            http("request_44")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0044_request.json")),
            http("request_45")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0045_request.json")),
            http("request_46")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0046_request.json")),
            http("request_47")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0047_request.json")),
            http("request_48")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0048_request.json")),
            http("request_49")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0049_request.json")),
            http("request_50")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0050_request.json")),
            http("request_51")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0051_request.json")),
            http("request_52")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0052_request.json")),
            http("request_53")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0053_request.json")),
            http("request_54")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0054_request.json")),
            http("request_55")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0055_request.json")),
            http("request_56")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0056_request.json")),
            http("request_57")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0057_request.json")),
            http("request_58")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0058_request.json")),
            http("request_59")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0059_request.json")),
            http("request_60")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0060_request.json")),
            http("request_61")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0061_request.json")),
            http("request_62")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0062_request.json")),
            http("request_63")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0063_request.json")),
            http("request_64")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0064_request.json")),
            http("request_65")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0065_request.json")),
            http("request_66")
			.get("/profile/card")
			.headers(headers_66)))
		.pause(4)
		.exec(http("request_67")
			.get(uri04 + "/users/list")
			.headers(headers_67))
		.pause(2)
		.exec(http("request_68")
			.options(uri04 + "/users/getByWebId")
			.headers(headers_11)
			.resources(http("request_69")
			.post(uri04 + "/users/getByWebId")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0069_request.json")),
            http("request_70")
			.options(uri04 + "/locations/add")
			.headers(headers_11),
            http("request_71")
			.post(uri04 + "/locations/add")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0071_request.json"))))
		.pause(2)
		.exec(http("request_72")
			.get("/profile/card")
			.headers(headers_72)
			.resources(http("request_73")
			.options(uri04 + "/users/findNearest")
			.headers(headers_11),
            http("request_74")
			.post(uri04 + "/users/findNearest")
			.headers(headers_2)
			.body(RawFileBody("radarin_en3a/testloginandnavigate/0074_request.json"))))
		.pause(6)
		.exec(http("request_75")
			.options(uri04 + "/users/getByWebId")
			.headers(headers_11))

	setUp(scn.inject(constantUsersPerSec(5) during (30 seconds) randomized)).protocols(httpProtocol)
}
