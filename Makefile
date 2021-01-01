all:	index.html contact.html courses.html \
	projects.html internships.html extracurrics.html\
	 acads.html pubs.html awards.html\
	 resume.html

index.html:	index.jemdoc mysite.conf MENU
	jemdoc -c mysite.conf -o index.html index

pubs.html:	pubs.jemdoc mysite.conf MENU
	jemdoc -c mysite.conf -o pubs.html pubs

awards.html:	awards.jemdoc mysite.conf MENU
	jemdoc -c mysite.conf -o awards.html awards

extracurrics.html: extracurrics.jemdoc mysite.conf MENU
	jemdoc -c mysite.conf -o extracurrics.html extracurrics

acads.html:	acads.jemdoc mysite.conf MENU
	jemdoc -c mysite.conf -o acads.html acads

internships.html:	internships.jemdoc mysite.conf MENU
	jemdoc -c mysite.conf -o internships.html internships

projects.html:	projects.jemdoc mysite.conf MENU
	jemdoc -c mysite.conf -o projects.html projects

contact.html:	contact.jemdoc mysite.conf MENU
	jemdoc -c mysite.conf -o contact.html contact

courses.html:	courses.jemdoc mysite.conf MENU
	jemdoc -c mysite.conf -o courses.html courses

resume.html:	Resume_Ashudeep.pdf
	pdf2htmlEX Resume_Ashudeep.pdf resume.html

clean:
	# cp resume.html resume.bak
	rm *.html
