Voice Recorder using Python pip install sounddevice
import sounddevice
from scipy.io.wav file import write
#sample_rate
fs=44100
#Ask to enter the recording time second=int(input("Enter the Recording Time in second: "))
print("Recording....\n")
record_voice sound device.rec (int(second* fs), samplerate fs, channels=2)
sounddevice.wait()
write("MyRecording.wav", fs, record_voice)
print("Recording is done Please check you folder to listen recording")
#clcoding.com

