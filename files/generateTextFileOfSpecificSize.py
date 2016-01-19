import os,random,string,sys

def generateTextFileOfSpecificSize(size, outputfile):
    fout = open(outputfile, 'w')    
    letters = string.letters
    for i in range(size):
        fout.write(random.choice(letters))
    fout.write('\n')
    fout.close()

def main():
    if len(sys.argv) < 3:
        print "usage: generateTextFileOfSpecificSize size outputfile"
        return
    size = int(sys.argv[1])
    generateTextFileOfSpecificSize(size, sys.argv[2])
    print "done generating random plaintext file"
    
if __name__=="__main__":
    main()
