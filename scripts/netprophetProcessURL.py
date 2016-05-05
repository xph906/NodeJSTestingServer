from urlparse import urlparse
from urllib import unquote_plus
import sys,os
import HTMLParser, tldextract
html_parser = HTMLParser.HTMLParser()

def decodeURL(url):
  url = url.lower()
  unquote_url = unquote_plus(url)
  unescape_url = html_parser.unescape(unquote_url)
  return unescape_url

def getEffectiveDomainFromURL(url):
  try:
    o = tldextract.extract(url.lower())
    return o.domain + '.' + o.suffix
  except Exception as e:
    print >> sys.stderr, "error in getting getEffectiveDomain ", str(e)
    return None

def getEssentialPartOfURL(url):
  try:
    o = urlparse(url)
    return o.scheme + "://" + o.netloc + o.path 
  except Exception as e:
    print >> sys.stderr, "error in getting getEssentialPartOfURL ", str(e)
    return None

def preProcessRegularURLLlist(main_domain, url_list):
  url_set = set()
  for url in url_list:
    domain = getEffectiveDomainFromURL(url)
    #print "domain %s of %s " %(domain, url)
    if domain == None or domain != main_domain:
      continue
    if len(url) > 128:
      continue
    if '#' in url or ".." in url:
      continue
    if urlparse(url).path == '':
      url = url.strip()+'/'
    url_set.add(url.lower())    
  return url_set

def main():
  #USAGE: file_name domain_name
  file_name = os.path.basename(sys.argv[1].lower())
  domain_name = sys.argv[2].strip().lower()

  f = open(file_name)
  url_list = []
  for line in f:
    line = line.strip()
    url_list.append(line)
  print "Read %d lines of urls" %(len(url_list))
  
  url_set = preProcessRegularURLLlist(domain_name, url_list)
  print "After processing, generating %d lines of urls" %(len(url_set))
  count = 0
  for k in url_set:
    print k

if __name__=="__main__":
  main()
    
